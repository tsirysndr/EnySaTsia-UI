import React from 'react'
import Spinner from 'react-md-spinner'
import { compose, getContext } from 'recompose'
import { withRouter } from 'react-router-dom'
import { drizzleConnect as connect } from 'drizzle-react'
import PropTypes from 'prop-types'
import { withLogin } from './Enhancers/SigninEnhancer'
import SessionActions from '../Redux/SessionRedux'

const Signin = (props) => (
  <div style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Spinner size={36}></Spinner>
  </div>
)

const withDrizzle = getContext({
  drizzle: PropTypes.object
})

const withData = compose(
  withRouter,
  withDrizzle,
  withLogin,
)

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedIn: (value) => dispatch(SessionActions.setLoggedIn(value)),
    setProfile: (value) => dispatch(SessionActions.setProfile(value)),
  }
}

export default connect(withData(Signin), mapStateToProps, mapDispatchToProps)