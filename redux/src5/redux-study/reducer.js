import {combineReducers} from 'redux'

var initState = {
    name:'todo-mvc',
    active:'all',
    items:[]
}

var todo = function (state=initState, action) {

    switch (action.type){

        case 'reset':
            var items = action.items

            return Object.assign({},state,{items:items})

        case 'add':
            var items = state.items
            items.push({name:action.text,active:true})
            return Object.assign({},state,{items:[...items]})



        case 'remove':
            var items = state.items,
                json = []

            for(var i=0;i<items.length;i++){
                if(items[i].name != action.text){
                    json.push(items[i])
                }
            }
            return Object.assign({},state,{items:json})
        case 'active':
            return Object.assign({},state,{active:action.value})
        case 'active-item':
            var items = state.items;
            for(var i=0;i<items.length;i++){
                if(items[i].name == action.text){
                    items[i].active = !items[i].active
                }
            }
            return Object.assign({},state,{items:[...items]})
    }
    return state
}

var fs = function (state, action) {
    switch (action.type){

    }
    return {
        name:'fs',
        items:[{name:'ryan',folder:false,ext:'.txt'},{name:'ready',folder:true,ext:''}]
    }
}

//合并reducer

var reducer = combineReducers({
    todo,
    fs
})
export default reducer