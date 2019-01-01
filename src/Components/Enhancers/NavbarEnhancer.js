import {
  compose,
  withState,
  withPropsOnChange,
  withHandlers,
} from 'recompose'

const TEMPORARY_PASSWORD = 'UuCsZFqmWlswSSyWBsj+Fw=='

export const withPopoverHandler = compose(
  withState('anchorEl', 'setAnchorEl', null),
  withHandlers({
    handleOpen: props => event => {
      props.setAnchorEl(event.currentTarget)
    },
    handleClose: props => event => {
      props.setAnchorEl(null)
    }
  })
)

export const withGenerateDefaultAddress = withPropsOnChange(
  ['extra'],
  props => {
    const { wm } = props.extra
    wm.createNewVaultAndKeychain(TEMPORARY_PASSWORD)
  }
)
