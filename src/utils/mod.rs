use futures_util::{Future, stream::FuturesOrdered};
use themelio_nodeprot::ValClientSnapshot;
use themelio_stf::{Block, CoinID, CoinValue, Denom};
use crate::{html::{MicroUnit, TransactionSummary}, to_badgateway};


pub fn get_old_blocks(last_snap: &ValClientSnapshot, depth: usize) 
-> FuturesOrdered<impl Future<Output = anyhow::Result<(Block, CoinValue)>>> {
    let mut futs = FuturesOrdered::new();
    for height in (0..=last_snap.current_header().height.0).rev().take(depth) {
        let last_snap = last_snap.clone();
        futs.push(async move {
            log::debug!("rendering block {}", height);
            let old_snap = last_snap
                .get_older(height.into())
                .await?;
            let reward_coin = old_snap
                .get_coin(CoinID::proposer_reward(height.into()))
                .await?;
            let reward_amount = reward_coin.map(|v| v.coin_data.value).unwrap_or_default();
            let old_block = old_snap.current_block().await?;
            Ok((old_block, reward_amount))
        });
    }
    futs
}

pub fn get_transactions(block: &Block, max_count: usize) -> Vec<TransactionSummary>{
    let mut transactions: Vec<TransactionSummary> = Vec::new();
    for transaction in &block.transactions {
        if transactions.len() < max_count {
            transactions.push(TransactionSummary {
                hash: hex::encode(&transaction.hash_nosigs().0),
                shorthash: hex::encode(&transaction.hash_nosigs().0[0..5]),
                height: block.header.height.0,
                _weight: transaction.weight(),
                mel_moved: MicroUnit(
                    transaction
                        .outputs
                        .iter()
                        .map(|v| if v.denom == Denom::Mel { v.value.0 } else { 0 })
                        .sum::<u128>()
                        + transaction.fee.0,
                    "MEL".into(),
                ),
            })
        }
    }
    transactions
}



// pub fn get_transactions_iterator(block: &Block, max_count: usize) -> impl Iterator<Item=TransactionSummary>{
//     &block.transactions.iter().map(|transaction|{
//             TransactionSummary {
//                 hash: hex::encode(&transaction.hash_nosigs().0),
//                 shorthash: hex::encode(&transaction.hash_nosigs().0[0..5]),
//                 height: block.header.height.0,
//                 _weight: transaction.weight(),
//                 mel_moved: MicroUnit(
//                     transaction
//                         .outputs
//                         .iter()
//                         .map(|v| if v.denom == Denom::Mel { v.value.0 } else { 0 })
//                         .sum::<u128>()
//                         + transaction.fee.0,
//                     "MEL".into(),
//                 ),
//             }
//     })
// }