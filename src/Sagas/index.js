import { takeLatest, takeEvery, all, fork } from 'redux-saga/effects'
import { drizzleSagas } from 'drizzle'

export default function * root () {
  yield all([
    // some sagas receive extra parameters in addition to an action
    // takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
    drizzleSagas.map(saga => fork(saga))
  ])
}
