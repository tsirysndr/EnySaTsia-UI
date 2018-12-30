import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import drizzleOptions from '../drizzleOptions'
import { generateContractsInitialState } from 'drizzle'
import createSagaMiddleware from 'redux-saga'

export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []
  const sagaMiddleware = createSagaMiddleware({
    context: {
    }
  })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware))

  const initialState = {
    contracts: generateContractsInitialState(drizzleOptions)
  }

  const composeEnhancers = composeWithDevTools({ realtime: true })
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  )
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}