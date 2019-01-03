import {
  withPropsOnChange,
} from 'recompose'
import Box from '3box'

async function loadProfile(props, Box, web3) {
  try {
    const user = await Box.getProfile(props.accounts[0])
    const box = await Box.openBox(props.accounts[0], web3.currentProvider)
    console.log('box: ', box)
    props.setLoggedIn(true)
    props.setProfile(user)
    props.history.push('/')
  } catch (e) {
    console.log('error: ', e)
    props.history.goBack()
  }
}

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
        loadProfile(props, Box, web3)
      })
    })
    .catch(e => console.error(e))
})