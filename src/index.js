import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import {
    BrowserRouter as Router,
    Route,
    Switch
    } from 'react-router-dom'
import configureStore from './store/configureStore'
import App from './App'
import PostsIndex from './containers/postsIndex'
import PostNew from './containers/postsNew'
import PostsShow from './containers/postsShow'
import {Provider} from 'react-redux'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={PostsIndex} />
                <Route exact path="/posts/new" component={PostNew} />
                <Route path="/posts/:id" component={PostsShow} />
            </Switch>
        </Router>
    </Provider>,
  document.getElementById('root')
);
