import React from 'react'


//因为只有render方法，没有处理数据的逻辑了，现在我们把他叫
//展示性组件
import {activeItem,active,remove,add} from './action'
import ReactDOM from 'react-dom'
var Todo = React.createClass({

    render(){
        const {items,name,dispatch,active} = this.props

        if(active == 'all'){
            var nodes = items.map((obj,id)=>{
                return (
                    <p key={id}>
                        <span  onClick={(e)=>dispatch(activeItem(obj.name))} style={{textDecoration:!obj.active?'line-through':''}}>{obj.name}</span>
                        <button onClick={(e)=>this.handleDelete(obj.name)}>删除</button>
                    </p>
                )
            })
        }
        if(active == 'active'){
            var nodes = items.map((obj,id)=>{
               return obj.active ?  (
                    <p key={id}>
                        <span onClick={(e)=>dispatch({type:'active-item',text:obj.name})} style={{textDecoration:!obj.active?'line-through':''}}>{obj.name}</span>
                        <button onClick={(e)=>this.handleDelete(obj.name)}>删除</button>
                    </p>
                ) : null
            })
        }
        if(active == 'complete'){
            var nodes = items.map((obj,id)=>{
                return !obj.active ?  (
                    <p key={id}>
                        <span onClick={(e)=>dispatch({type:'active-item',text:obj.name})} style={{textDecoration:!obj.active?'line-through':''}}>{obj.name}</span>
                        <button onClick={(e)=>this.handleDelete(obj.name)}>删除</button>
                    </p>
                ) : null
            })
        }




        return(
            <div>
                <input onSubmit={this.submit} ref="input"/><button onClick={this.handleClick}>增加</button>
                <div>
                    {nodes}
                </div>
                <div>
                    <button onClick={(e)=>dispatch(active('all'))}>all</button>--
                    <button onClick={(e)=>dispatch(active('active'))}>active</button>--
                    <button onClick={(e)=>dispatch(active('complete'))}>complete</button>
                </div>
            </div>
        )
    },
    handleDelete(name){
        const {dispatch} = this.props
        dispatch(remove(name))
    },
    handleClick(e){
        const {dispatch,add} = this.props
       var value = ReactDOM.findDOMNode(this.refs.input).value
        add(value)
    },
    componentDidMount(){
        const {dispatch,add,get111} = this.props
        get111({aaa:111,bbb:222})
    }
})

export default Todo