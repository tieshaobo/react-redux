import Todo from './todo-view'
import {connect} from 'react-redux'

var mapState2props = function (store) {

    return {
        items:store.todo.items,
        name:store.todo.name,
        active:store.todo.active
    }
}

import {add,get111} from './action'
import {bindActionCreators} from 'redux'
var dispatch2props = function (dispatch) {

    return {
        dispatch:dispatch,
        add:(text)=>dispatch(add(text)),
        get111:bindActionCreators(get111,dispatch)
    }
}

//1:dispatch2props get111--bindActionCreators(get111,dispatch)

//connect连接器
//链接strore,返回值是给所连接的组件当属性用的
export default connect(mapState2props,dispatch2props)(Todo)