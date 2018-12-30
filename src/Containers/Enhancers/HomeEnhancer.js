import {
  withState,
  compose,
  withPropsOnChange
 } from 'recompose'
import { Observable } from 'rxjs/Rx'

const questions = [
  {
    author: 'Tsiry Sandratraina',
    question: 'Nangala-bato ve Rajoelina ?',
    date: '30 Déc',
  },
  {
    author: 'Tsiry Sandratraina',
    question: 'Tsara ve ity application ity ?',
    date: '25 Déc',
  }
]
export const withQuestions = withState('questions', 'setQuestions', questions)
export const withLoading = compose(
  withState('loading', 'setLoading', true),
  withPropsOnChange(['match'], props => {
    Observable.of(1).delay(1800).subscribe(() => props.setLoading(false))
  })
)