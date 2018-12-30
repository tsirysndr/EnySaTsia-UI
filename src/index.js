import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import * as serviceWorker from './serviceWorker'
import {
  Route,
  HashRouter,
  Switch,
} from 'react-router-dom'
import { Provider as StyletronProvider } from 'styletron-react'
import { createTheme, ThemeProvider, lightThemePrimitives } from 'baseui'
import { Client as Styletron } from 'styletron-engine-atomic'
import { DrizzleProvider } from 'drizzle-react'
import drizzleOptions from './drizzleOptions'
import createStore from './Redux'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import Home from './Containers/Home'
import NewQuestion from './Containers/NewQuestion'

require('typeface-montserrat')

const store = createStore()

const theme = createTheme(
  {
    ...lightThemePrimitives,
    primary50: '#8721f3;',
    primary100: '#8721f3;',
    primary200: '#8721f3;',
    primary300: '#8721f3;',
    primary400: '#8721f3;',
    primary500: '#8721f3;',
    primary600: '#8721f3;',
    primary700: '#8721f3;',
  }
)

const engine = new Styletron()

ReactDOM.render(
  <DrizzleProvider options={drizzleOptions} store={store}>
    <StyletronProvider value={engine}>
      <ThemeProvider theme={theme}>
        <HashRouter hashType='hashbang'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/post' component={NewQuestion} />
          </Switch>
        </HashRouter>
      </ThemeProvider>
    </StyletronProvider>
  </DrizzleProvider>, 
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
