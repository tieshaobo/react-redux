import React from 'react'
import {
    Router,
    Route,
    IndexRoute,
    Link,
    hashHistory,
    browserHistory
} from 'react-router';

import User from './components/user'
import Login from './components/login'
import Project from './components/project'
import Me from './components/me'
import Page404 from './components/page-404'
import Home from './components/home'
import Repo from './components/repo'

import {Provider,connect} from 'react-redux'
import {init,login} from './action'
var R = React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
                <IndexRoute component={Home}/>
                <Route path="login" component={Login}></Route>
                <Route path="users/:id" component={User}></Route> 
                <Route path="me" component={Me}></Route>  
                <Route path="repo/:id" component={Repo}></Route>                 
                <Route path="project" component={Project}></Route>
                <Route path="home" component={Home}></Route>
                <Route path="*" component={Page404}></Route>
            </Router>
    )
  },
  componentDidMount(){
    const {init,login,dispatch} = this.props;
  

    //dispatch(login({name:'lielie2',password:'lielie2'}));
   dispatch(init());
  }
})

var store2props = function(){
    return {}
}

var action2props = function(dispatch){
    return {
        dispatch:dispatch,
        //init:()=>dispatch(init()),
        //login:(query)=>dispatch(login(query))
        init:init,
        login:login
    }
}
var Rout = connect(store2props,action2props)(R)
export default Rout