import {
  compose,
  withState,
  withPropsOnChange,
} from 'recompose'
import Box from '3box'

export const withAddress = withPropsOnChange(
  ['accounts'],
  props => ({
    address: props.accounts[0]   
  })
)

export const withUser = compose(
  withState('user', 'setUser', ''),
  withPropsOnChange(['accounts'], props => {
    Box.getProfile(props.accounts[0]).then(data => props.setUser(data))
  })
)