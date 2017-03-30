import request from 'superagent'


export function actives(value) {
    return {
        type:"active",
        text:value
    }
}

export function activeItem(text) {
    return {
        type: "active-item",
        text: text
    }
}

export function add(text) {
    return {
        type: "add",
        text: text
    }
}

export function remove(text) {
    return {
        type: "remove",
        text: text
    }
}
export function reset(items) {
    return {
        type : 'reset',
        items:items
    }
}
export function get111(query){
    return function(dispatch){
        console.log(query)
        request
            .get('http://101.200.129.112:9527/react1/student/')
            .end(function(err,res){
                 console.log(res.body)
                  dispatch(reset(res.body))
            })
    }
}