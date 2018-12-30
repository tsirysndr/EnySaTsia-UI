import {
  withState,
  withPropsOnChange,
  withHandlers,
  compose,
 } from 'recompose'

const answers = new Map()
answers.set('yes', 'OUI')
answers.set('no', 'NON')

export const withAnswers = withState('answers', 'setAnswers', answers)
export const withAnswer = withState('answer', 'setAnswer', null)
export const withAnswered = compose(
withState('answered', 'setAnswered', false),
withHandlers({
  onAnswer: props => event => {
    props.setAnswered(true)
    props.setAnswer(event)
  }
})
)
export const withSubmitted = compose(
  withState('submitted', 'setSubmitted', false),
  withHandlers({
    onSubmit: props => event => {
      props.setSubmitted(true)
    }
  })
)