import {
  compose,
  withState,
  withPropsOnChange,
} from 'recompose'
import { Observable } from 'rxjs/Rx'

export const withAddress = compose(
  withState('address', 'setAddress', ''),
  withPropsOnChange(
    ['extra'],
    props => {
      const { wm } = props.extra
      Observable.of(1).delay(200).subscribe(() => {
        wm.getAccounts().then(accounts => {
          props.setAddress(accounts[0])
        })
      })
    }
  )
)
