import Web3 from 'web3'
import Transaction from 'ethereumjs-tx'
import WalletManager from './walletManager'
import ProviderEngine from 'web3-provider-engine'
import WebSocketSubprovider from 'web3-provider-engine/subproviders/websocket'
import NonceSubprovider from 'web3-provider-engine/subproviders/nonce-tracker'
import CacheSubprovider from 'web3-provider-engine/subproviders/cache'
import HookedWalletSubprovider from 'web3-provider-engine/subproviders/hooked-wallet'

export const wm = new WalletManager()

async function getAccounts(cb) { 
  cb(null, await wm.getAccounts()) 
}

async function approveTransaction(txParams, cb){ 
  console.log('================================')
  console.log('approve:', txParams)
  const tx = new Transaction(txParams)
  const signedTx = await wm.signTransaction(tx, txParams.from)
  const serializedTx = signedTx.serialize()
  const hexTx = `0x${serializedTx.toString('hex')}`
  console.log('hexTx:', hexTx)
  console.log('================================')
  cb(null, hexTx)
}

async function signTransaction(txParams, cb) {
  console.log('================================')
  const tx = new Transaction(txParams)
  console.log('txParams:', txParams)
  const signedTx = await wm.signTransaction(tx, txParams.from)
  const serializedTx = signedTx.serialize()
  const rawTx = `0x${serializedTx.toString('hex')}`
  console.log('================================')
  cb(null, rawTx)
}

async function signMessage(msgParams, cb) {
  console.log('msgParams: ', msgParams)
  const rawSig = await wm.signMessage(msgParams)
  const signature = rawSig.toString('hex')
  console.log('signature: ', signature)
  cb(null, signature)
}

const hookedWalletOpts = {
  getAccounts,
  approveTransaction,
  signTransaction,
  signMessage,
}

export const engine = new ProviderEngine()
engine.addProvider(new HookedWalletSubprovider(hookedWalletOpts))
engine.addProvider(new CacheSubprovider())
engine.addProvider(new NonceSubprovider())
engine.addProvider(new WebSocketSubprovider({ rpcUrl: 'ws://127.0.0.1:8541' }))

engine.on('block', (block) => {
  console.log('================================')
  console.log('BLOCK CHANGED:', '#' + block.number.toString('hex'), '0x' + block.hash.toString('hex'))
  console.log('================================')
})

// network connectivity error
engine.on('error', (err) => {
  // report connectivity errors
  console.error(err.stack)
})

engine.start()

export const web3 = new Web3(engine)

window.web3 = web3

