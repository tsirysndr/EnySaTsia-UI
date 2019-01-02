import {
  withPropsOnChange,
} from 'recompose'
import Box from '3box'

export const withLogin = withPropsOnChange(['drizzle'], props => {
  if (!window.ethereum) {
    return
  }
  window.ethereum.enable()
    .then(() => {
      const { web3 } = props.drizzle
      const message = 'This app wants to view and update your 3Box profile.'
      web3.eth.personal.sign(web3.utils.fromAscii(message), props.accounts[0], (err, res) => {
        if (err) {
          return
        }
        Box.getProfile(props.accounts[0]).then(user => {
          console.log('user: ', user)
          props.setLoggedIn(true)
          props.history.push('/')
        }).catch(e => console.log('error: ', e))
      })
    })
    .catch(e => console.error(e))
})