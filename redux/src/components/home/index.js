import React from 'react'
import {Link,hashHistory} from 'react-router'
import {Col,Row} from 'antd'

var User = React.createClass({
    render(){
        const {data} = this.props;
        const {name,project} = data;
        var nodes = project.map(function(val,i){
            return  (
                <li key={i} style={{float:'left'}} onClick={(e)=>hashHistory.push("repo/:"+val.id)}>
                    <h5>{val.name}</h5>
                    <p>{val.description}</p>
                </li>
            )
        })
        return (
            <div>
                <h4>{name}</h4>
                <ul>
                    {nodes}
                </ul>
            </div>
        )
    }
})
var Home = React.createClass({
    render(){
        const {info,users} = this.props;
        var nodes = users.map(function(obj,id){
            return (
                <User data = {obj}/>
            )
        })
        return (
            <div className="home">
                <h3>动脑学院前端项目自动发布系统</h3>
                <div>
                    <Row>
                        <Col span={2}>我</Col>
                        <Col span={4}><Link to='me'>{info.name}</Link></Col>
                    </Row>
                   <Row>
                        <Col span={20}>
                            <ul>{nodes}</ul>
                        </Col>
                    </Row>
                    
                </div>
            </div>
        )
    }
})

import {connect} from 'react-redux'
var store2props = function(store){
    return {
        info:store.me.info,
        users:store.me.users
    }
}
var H = connect(store2props)(Home)
export default H

