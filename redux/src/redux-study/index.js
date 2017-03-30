import React from 'react'
import {Provider} from 'react-redux'
import {createStore,compose,applyMiddleware} from 'redux'
import reducer from './reducer'
//单一的reducer等待传入的action来处理数据
import thunk from 'redux-thunk'
//根un据合并后的reducer创建store
var store = createStore(reducer,compose(
     applyMiddleware(thunk),
    window.devToolsExtension()
))
import Container from './todo-container'
var ReduxStudy = React.createClass({
    render(){
       return (
         <Provider store={store}>
             <Container/>
        </Provider>
       )
    }
})
export default ReduxStudy