import {
  compose,
  withState,
  withHandlers,
  withPropsOnChange,
} from 'recompose'
import { Observable } from 'rxjs/Rx'
import sha from 'sha.js'
import generateSalt from 'random-bytes'
import moment from 'moment'

export const withLoading = withState('loading', 'setLoading', false)
export const withQuestion = compose(
  withState('question', 'setQuestion', ''),
  withHandlers({
    onPublish: props => event => {
      props.setLoading(true)
      Observable.of(1).delay(1800)
        .subscribe(() => props.history.goBack())
      const session = {
        author:    '0x85ed402cD905BB44b0A10cd01453BE8B860bbF00',
        question:  props.question,
        salt:      generateSalt.sync(16).toString('base64'),
        createdAt: moment().unix(),
      }
      const hash = sha('sha256').update(JSON.stringify(session)).digest('hex')
      console.log(session)
      console.log(hash)

    }
  })
)
