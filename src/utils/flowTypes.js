/**
 * Created by Paul Puey 2017/11/09.
 * @flow
 */

// import { type EdgeTransaction } from 'edge-core-js/types'
// import { txLibInfo } from './currencyInfoETH.js'
// export const DATA_STORE_FOLDER = 'txEngineFolder'
// export const DATA_STORE_FILE = 'walletLocalData.json'
// export const PRIMARY_CURRENCY = txLibInfo.currencyInfo.currencyCode

// export type EthereumSettings = {
//   etherscanApiServers:Array<string>,
//   superethServers:Array<string>
// }

// type EthereumFeesGasLimit = {
//   regularTransaction: string,
//   tokenTransaction: string
// }
//

export type SatPerByte = string

export type Satoshi = string

export type BitcoinFees = {
  // SatPerByte priority is vendor server, then Edge, then default
  lowFee: SatPerByte, // satoshi per byte
  standardFeeLow: SatPerByte, // satoshi per byte
  standardFeeHigh: SatPerByte,
  highFee: SatPerByte,
  // first 4 from manipulating Earn.com data

  // The last time the fees were updated, comes when fetching
  timestamp: number,

  // from info servers, priority is Edge then default (no vendor)
  // The amount of satoshis which will be charged the standardFeeLow
  standardFeeLowAmount: Satoshi,
  // The amount of satoshis which will be charged the standardFeeHigh
  standardFeeHighAmount: Satoshi
}

export type EarnComFee = {
  minFee: number,
  maxFee: number,
  dayCount: number,
  memCount: number,
  minDelay: number,
  maxDelay: number,
  minMinutes: number,
  maxMinutes: number
}

export type EarnComFees = {
  fees: Array<EarnComFee>
}
