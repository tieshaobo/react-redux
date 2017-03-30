import React from 'react'

import {Provider,connect} from 'react-redux'
import {createStore,compose,applyMiddleware} from 'redux'
import reducer from './reducer'

//单一的reducer,等待传入的action 来处理数据

import thunk from 'redux-thunk'
var store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension()
))


import Container from './todo-contianer'



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