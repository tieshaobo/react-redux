import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import 'antd/dist/antd.min.css'
import {Provider, connect} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import R from './router'
//import Init from './init'
import Login from './init/login'
import {hashHistory} from 'react-router'
import request from 'superagent'
var host = 'http://101.200.129.112:9527'
var api = {
  init: '/deploy/init/',
  login: '/deploy/login/',
  logout: '/deploy/logout/'
}
var store = createStore(reducer, compose(applyMiddleware(thunk), window.devToolsExtension()))

var Init = React.createClass({
  render() {
    return (
      <div>loading...</div>
    )
  },
  componentDidMount() {
    request
      .get(host + api.init)
      .withCredentials()
      .end(function (err, res) {
        console.log(res.body)
        var data = res.body;
        if (data.noLogin) {
           hashHistory.push("login")
          ReactDOM.unmountComponentAtNode(
            document.getElementById('root'))
          ReactDOM.render(
            <Login/>, document.getElementById('root'))
        } else {
          ReactDOM.unmountComponentAtNode(
            document.getElementById('root'));
          ReactDOM.render(
            <div className="App">
              <Provider store={store}>
                <R/>
              </Provider>
            </div>,
          document.getElementById('root'))
          // hashHistory.push("home"); dispatch(getInit(data))
        }
      })
  }
})

ReactDOM.render(
  <Init/>, document.getElementById('root'))

// ReactDOM.render(
/*<div className="App">
    <Provider store={store}>
      <R/>
    </Provider>
  </div>,*/
//    document.getElementById('root')) import App from './App'; import
// './index.css'; import ReduxStudy from './redux-study/index' ReactDOM.render(
//  <ReduxStudy />,   document.getElementById('root') );