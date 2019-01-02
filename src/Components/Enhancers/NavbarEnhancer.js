import {
  compose,
  withState,
  withHandlers,
  withPropsOnChange,
} from 'recompose'
import Box from '3box'

export const withShowBanner = compose(
  withState('showBanner', 'setShowBanner', true),
  withPropsOnChange(['drizzle'], props => {
    if (typeof window.ethereum !== 'undefined'
      || (typeof window.web3 !== 'undefined')) {
        // Web3 browser user detected. You can now use the provider.
        props.setShowBanner(false)
      }
  })
)

export const withPopoverHandler = compose(
  withState('anchorEl', 'setAnchorEl', null),
  withHandlers({
    handleOpen: props => event => {
      props.setAnchorEl(event.currentTarget)
    },
    handleClose: props => event => {
      props.setAnchorEl(null)
    },
  })
)

export const withOnCreateProfile = withHandlers({
  onCreateProfile: props => event => {
    const win = window.open('https://3box.io/create', '_blank')
    win.focus()
  }
})

export const withOnSignIn = withHandlers({
  onSignIn: props => event => props.history.push('/login')
})

export const withOnLogout = withHandlers({
  onLogout: props => event => {
    props.setLoggedIn(false)
    props.handleClose()
  }
})

export const withOnDownloadMetamask = withHandlers({
  onDownloadMetamask: props => event => {
    const win = window.open('https://metamask.io', '_blank')
    win.focus()
  }
})