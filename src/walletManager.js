import { accountImporter } from '@tsiry/eth-account-importer'
import seedPhraseVerifier from '@tsiry/seed-phrase-verifier'
import KeyringController from 'eth-keyring-controller'
import TrezorKeyring from 'eth-trezor-keyring'
import LedgerBridgeKeyring from 'eth-ledger-bridge-keyring'
import ethUtil from 'ethereumjs-util'
import sigUtil from 'eth-sig-util'

export default class WalletManager {

  constructor() {
    this._keyringController = new KeyringController({
      keyringTypes: [TrezorKeyring, LedgerBridgeKeyring]
    })
  }

  setLocked() {
    return this._keyringController.setLocked()
  }

  async createNewVaultAndKeychain(password) {
    let vault, accounts
    accounts = await this._keyringController.getAccounts()

    if (accounts.length > 0) {
      vault = await this._keyringController.fullUpdate()
      return vault
    } 

    vault = await this._keyringController.createNewVaultAndKeychain(password)
    accounts = await this._keyringController.getAccounts()

    return vault
  }

  async createNewVaultAndRestore(password, seed) {
    const keyringController = this._keyringController
    const vault = await keyringController.createNewVaultAndRestore(password, seed)
    const primaryKeyring = keyringController.getKeyringsByType('HD Key Tree')[0]
    
    if (!primaryKeyring) {
      throw new Error('KeyringController - No HD Key Tree found')
    }

    return vault
  }

  async submitPassword(password) {
    await this._keyringController.submitPassword(password)
  }

  getAccounts() {
    return this._keyringController.getAccounts()
  }

  exportAccount(address) {
    return this._keyringController.exportAccount(address)
  }

  signTransaction(ethTx, from) {
    return this._keyringController.signTransaction(ethTx, from)
  }

  async signMessage(msgParams) {
    const privateKeyHex = await this._keyringController.exportAccount(msgParams.from)
    const privateKey = new Buffer(privateKeyHex, 'hex')
    const message = ethUtil.stripHexPrefix(msgParams.data)
    const msgHash = ethUtil.hashPersonalMessage(new Buffer(message, 'hex'))
    const msgSig = ethUtil.ecsign(msgHash, privateKey)
    const rawMsgSig = ethUtil.bufferToHex(sigUtil.concatSig(msgSig.v, msgSig.r, msgSig.s))
    return Promise.resolve(rawMsgSig)
  }

  async addNewAccount() {
    const keyringController = this._keyringController
    const primaryKeyring = keyringController.getKeyringsByType('HD Key Tree')[0]

    if (!primaryKeyring) {
      throw new Error('KeyringController - No HD Key Tree found')
    }
  
    const oldAccounts = await keyringController.getAccounts()
    const keyState = await keyringController.addNewAccount(primaryKeyring)
    const newAccounts = await keyringController.getAccounts()

    let newAddress

    newAccounts.forEach((address) => {
      if (!oldAccounts.includes(address)) {
        newAddress = address
      }
    })

    return { keyState, newAddress }
  }

  async removeAccount(address) {
    await this._keyringController.removeAccount(address)
    return address
  }

  async importAccountWithStrategy(strategy, args) {
    const privateKey = await accountImporter.importAccount(strategy, args)
    await this._keyringController.addNewKeyring('Simple Key Pair', [ privateKey ])
    const accounts = await this._keyringController.getAccounts()
    return accounts
  }

  async verifySeedPhrase () {

    const keyringController = this._keyringController

    const primaryKeyring = keyringController.getKeyringsByType('HD Key Tree')[0]
    if (!primaryKeyring) {
      throw new Error('MetamaskController - No HD Key Tree found')
    }

    const serialized = await primaryKeyring.serialize()
    const seedWords = serialized.mnemonic

    const accounts = await primaryKeyring.getAccounts()
    if (accounts.length < 1) {
      throw new Error('MetamaskController - No accounts found')
    }

    try {
      await seedPhraseVerifier.verifyAccounts(accounts, seedWords)
      return seedWords
    } catch (err) {
      throw err
    }
  }

}
