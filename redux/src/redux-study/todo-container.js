import Todo from './todo-view'
import {connect} from 'react-redux'

var mapStateToProps = function(store){
    var items = store.todo
    return{
        name:items.name,
        items:items.items,
        active:items.active
    }
}

import {add,get111} from "./action"
import {bindActionCreators} from 'redux' //很重要


var dispatchToprops = function (dispatch){
    return {
       dispatch:dispatch,
       add:(text)=>dispatch(add(text)),
       get111:bindActionCreators(get111,dispatch)
    }
}
//connect 连接器
//连接store，返回值是给所连接的组件当属性用的
export default connect(mapStateToProps,dispatchToprops)(Todo)
