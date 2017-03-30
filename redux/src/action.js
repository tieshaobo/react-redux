import request from 'superagent'
import {hashHistory} from 'react-router'
var host = 'http://101.200.129.112:9527'
var api = {
    init:'/deploy/init/',
    login:'/deploy/login/',
    logout:'/deploy/logout/'
}
export function getInit(obj){
    return {
        type:'get-init',
        info:obj.info,
        project:obj.project,
        users:obj.users
    }
}
export function getLogin(obj){
    return {
        type:'get-login',
        data:obj
    }
}
export function init(){
    return function(dispatch){
        request
            .get(host+api.init)
            .withCredentials()
            .end(function(err,res){
                console.log(res.body)
               var data = res.body;
               if(data.noLogin){
                   hashHistory.push("login")
               }else{
                    hashHistory.push("home");
                    dispatch(getInit(data))
               }
                
               
            })
    }
}

export function login(query){
    return function(dispatch){
        request
            .get(host+api.login)
            .query(query)
            .withCredentials()
            .end(function(err,res){
                var data = res.body;
                console.log(data)
                if(data.noLogin){
                    dispatch(getLogin(res.body))
                }else{
                    dispatch(init());
                    hashHistory.push("home") 
                }
            })
            
    }
}

export function logout(query){
    return function(dispatch){
        request
            .get(host+api.logout)
            .withCredentials()
            .end(function(err,res){
                var data = res.body;
                console.log(data)
                // if(data.noLogin){
                //     dispatch(getLogin(res.body))
                // }else{
                //     dispatch(init());
                //     hashHistory.push("home") 
                // }
            })
            
    }
}