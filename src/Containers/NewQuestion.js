import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import { Container } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import Textarea from 'muicss/lib/react/textarea'
import Button from 'muicss/lib/react/button'
import avatar from 'gradient-avatar'
import { compose, getContext } from 'recompose'
import PropTypes from 'prop-types'
import { withLoading, withQuestion } from './Enhancers/NewQuestionEnhancer'
import Spinner from 'react-md-spinner'
import base64 from 'base64-js'
import { drizzleConnect as connect } from 'drizzle-react'

const a = base64.fromByteArray(Buffer.from(avatar('tsiry'), 'utf8'))
const avatarIcon = `data:image/svg+xml;base64,${a}`

const NewQuestion = (props) => (
  <div>
    {
      props.loading && (
        <div style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Spinner size={36}></Spinner>
        </div>
      )
    }
    {
      !props.loading && (
        <Container style={{ marginTop: 50 }}>
          <div>
            <span onClick={() => props.history.goBack()} style={{ cursor: 'pointer' }}>
              <MdArrowBack size={34} color='rgb(135, 33, 243)'></MdArrowBack>
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }}>
            <div style={{ flex: '0.8' }}>
              <div style={{ display: 'flex', marginBottom: 25 }}>
                <div style={{ marginRight: 15 }}>
                  <img style={{ width: 56, height: 56, borderRadius: 28 }} alt='' src={avatarIcon} />
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 10 }}>
                    <span style={{ fontWeight: 500 }}>{props.profile.name}</span>
                    {props.profile.username != null && <span style={{ color: '#657786', fontSize: 15 }}>@{props.profile.username}</span>}
                  </div>
                </div>
              </div>
              <Textarea onChange={ev => props.setQuestion(ev.target.value)} placeholder="Poser une question" />
              <Button onClick={props.onPublish} color="primary" variant="raised">Publier</Button>
            </div>
          </div>
        </Container>
      )
    }
  </div>
)

const withDrizzle = getContext({
  drizzle: PropTypes.object,
})

const withData = compose(
  withRouter,
  withDrizzle,
  withLoading,
  withQuestion,
)

const mapStateToProps = (state) => {
  return {
    profile: state.session.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(withData(NewQuestion), mapStateToProps, mapDispatchToProps)
