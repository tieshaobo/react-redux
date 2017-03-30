import React from 'react'
import {add,remove,activeItem,actives} from './action'
import ReactDom from 'react-dom'
//没有处理数据的逻辑了  只是展示性组件
var Todo = React.createClass({
    render(){
        const {name,items,dispatch,active} = this.props;
        var nodes="";
        if(active == "all"){
            nodes = items.map((v,id)=> {
                return (
                    <div key={id}>
                        <span  onClick={(e)=>dispatch(activeItem(v.name))}>{v.name + '===' + v.active}</span>
                        <button onClick={(e)=>dispatch(remove(v.name))}>删除</button>
                    </div>
                )
            })
        }

        if(active == "active"){
            nodes = items.map((v,id)=> {
                if(v.active){
                    return (
                        <div key={id}>
                            <span  onClick={(e)=>dispatch(activeItem(v.name))}>{v.name + '===' + v.active}</span>
                            <button onClick={(e)=>dispatch(remove(v.name))}>删除</button>
                        </div>
                    )
                }
            })
        };

       if(active == "complete"){
            nodes = items.map((v,id)=> {
                if(!v.active){
                    return (
                        <div key={id}>
                            <span  onClick={(e)=>dispatch(activeItem(v.name))}>{v.name + '===' + v.active}</span>
                            <button onClick={(e)=>dispatch(remove(v.name))}>删除</button>
                        </div>
                    )
                }
            })
        };
        return (
            <div>
                <input ref="input"/><button onClick={this.handler}>增加</button>
                <h3>{name}</h3>
                <div>{nodes}</div>
                <div>
                    <button onClick={(e)=>dispatch(actives("active"))}>active</button>
                    <button onClick={(e)=>dispatch(actives("complete"))}>complete</button>
                    <button onClick={(e)=>dispatch(actives("all"))}>all</button>
                </div>
            </div>
        )
    },
    // change:function(name){
    //      const {dispatch} = this.props;
    //     dispatch({
    //         type:'change',
    //         value:name
    //     })
    // },
    // all:function(){
    //     const {dispatch} = this.props;
    //     dispatch({
    //         type:'active',
    //         value:'all',
    //     })
    // },
    // active:function(){
    //     const {dispatch} = this.props;
    //     dispatch({
    //         type:'active',
    //         value:'active'
    //     })
    // },
    // complete:function(){
    //     const {dispatch} = this.props;
    //     dispatch({
    //         type:'active',
    //         value:'complete'
    //     })
    // },
    handler:function(e){
        const {dispatch,add} = this.props
        var val = ReactDom.findDOMNode(this.refs.input).value
        //dispatch(add(val))
        add(val)
    },
    //remov:function(name){
       // const {dispatch} = this.props;   
       // dispatch({
       //     type:'remove',
     //       text:name
     //   })
   // }
  componentDidMount(){
        const {dispatch,add,get111} = this.props;
        get111({aaa:111,bbb:222})
   }
})
export default Todo