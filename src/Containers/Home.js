import React from 'react'
import Navbar from '../Components/Navbar'
import Question from '../Components/Question'
import Box from '3box'
import LoadingAnimation from '../Components/LoadingAnimation'
import { compose } from 'recompose'
import { withLoading, withQuestions } from './Enhancers/HomeEnhancer'

async function loadProfile() {
  const profile = await Box.getProfile('0x85ed402cD905BB44b0A10cd01453BE8B860bbF00')
  console.log(profile)
}

loadProfile()

const Home = (props) => (
  <div>
    <Navbar />
    <div style={{ marginLeft: 100, marginRight: 100, paddingTop: 92 }}>
      {
        props.loading && (
          <LoadingAnimation />
        )
      }
      {
        !props.loading && (
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            {
              props.questions.map((item, index) => <Question key={index} {...item} />)
            }
          </div>
        )
      }
    </div>
  </div>
)

const withData = compose(
  withLoading,
  withQuestions,
)

export default withData(Home)