import { combineReducers } from 'redux'
//先创建两个reducer，todo、fs然后合并两个reducer，然后在创建全局的store
var initState = {
        name:'todo-mvc',
        active:'all',
        items:[]//{name:'aaa',active:false},{name:'bbb',active:true}
    }
var todo = function(state=initState,action){
    //console.log(action)
    switch(action.type){
        case 'reset':
            var items = action.items
            return Object.assign({},state,{items:items})
       case 'add':
            var items = state.items;
            items.push({name:action.text,active:false});
            return Object.assign({},state,{active:'all',items:[...items]});
       case 'remove':
            var items = state.items;
            var json = [];  
            console.log(action.text)        
            for(var i=0;i<items.length;i++){
                console.log(items[i].name , action.text)
                if(items[i].name != action.text){
                    json.push(items[i])
                }
            }
            return Object.assign({},state,{items:json});
        case 'active':
                return Object.assign({},state,{active:action.text});               
        case 'active-item':
            var items = state.items;
            var arr1 = [];        
            for(var i=0;i<items.length;i++){
                if(items[i].name == action.text){
                    items[i].active = !items[i].active
                }
                arr1.push(items[i])
            }
            return Object.assign({},state,{items:arr1});
    }
    return state;
}

var fs = function(state,action){
    switch(action.type){
       
    }
    return {
        name:'fs',
        items:[{name:'ccc',folder:false,ext:'.txt'},{name:'ddd',folder:'true',ext:''}]
    }
}

var abc = function(state,action){
    switch(action.type){

    }
    return{
        prop:'abc',
        items:[{name:'abc'},{name:'efg'}]
    }
}

//合并两个reducer为一个
var reducer = combineReducers({
    todo,
    fs,
    abc
})
export default reducer