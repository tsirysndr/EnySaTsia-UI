import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  setLoggedIn: ['loggedIn'],
  setProfile: ['profile'],
})

export const SessionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loggedIn: false,
  profile: {},
})

/* ------------- Reducers ------------- */

export const setLoggedIn = (state, { loggedIn }) =>
  state.merge({ loggedIn })

export const setProfile = (state, { profile }) =>
  state.merge({ profile })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOGGED_IN]: setLoggedIn,
  [Types.SET_PROFILE]: setProfile,
})
