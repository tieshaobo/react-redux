import React from 'react'
import ReactDOM from 'react-dom'
import {login,logout} from '../../action'
import {
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
    Row,
    Col
} from 'antd';
const FormItem = Form.Item;
var Login = React.createClass({
    getInitialState(){
        return {
            name:'',
            pass:''
        }
    },
    render() {
        return (
            <div>
                <h3>动脑学院前端项目自动发布系统</h3>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem 
                        label={'用户名'}
                        labelCol={{span:6}}
                        wrapperCol={{span:14}}
                    >
                        <Input  value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} addonBefore={< Icon type = "user" />} placeholder="Username"/>
                    </FormItem>

                    <FormItem 
                        label={'密码'}
                        labelCol={{span:6}}
                        wrapperCol={{span:14}}
                    >
                        <Input value={this.state.pass} onChange={(e)=>this.setState({pass:e.target.value})} addonBefore={< Icon type = "lock" />} type="password" placeholder="Password"/>
                    </FormItem>
                    <Row>
                        <Col push={6} span={3}><Button onClick={this.login} >登录</Button></Col>
                    </Row>
                    <Row>
                        <Col push={6} span={3}><Button onClick={this.logout} >退出</Button></Col>
                    </Row>
                </Form>
            </div>
        )
    },
    login(){
        var that = this;
        const {dispatch} = this.props;
        var query = {
            name:this.state.name,
            password:this.state.pass
        }
       dispatch(login(query))
    },
    logout(){
        const {dispatch} = this.props;
        dispatch(logout())
    },
    componentDidmount(){
        const {name} = this.props;
        if(name){
            
        }
    }
})
import {connect} from "react-redux"

var store2props = function(store){
    return {
        name:store.me.info.name
    }
}
// var action2props = function(dispatch){
//     return {
//         dispatch:dispatch,
//         login:login,
//         logout:logout
//     }
// },action2props
var L = connect(store2props)(Login)
export default L