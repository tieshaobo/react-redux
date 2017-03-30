import React from 'react'
import ReactDOM from 'react-dom'
import reducer from '../reducer'
import thunk from 'redux-thunk'
import request from 'superagent'
import {hashHistory} from 'react-router'
import {Provider, connect} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
var store = createStore(reducer, compose(applyMiddleware(thunk), window.devToolsExtension()))
import R from '../router'
var host = 'http://101.200.129.112:9527'
var api = {
    init: '/deploy/init/',
    login: '/deploy/login/',
    logout: '/deploy/logout/'
}
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
    getInitialState() {
        return {name: '', pass: ''}
    },
    render() {
        return (
            <div>
                <h3>动脑学院前端项目自动发布系统</h3>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem
                        label={'用户名'}
                        labelCol={{
                        span: 6
                    }}
                        wrapperCol={{
                        span: 14
                    }}>
                        <Input
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}
                            addonBefore={< Icon type = "user" />}
                            placeholder="Username"/>
                    </FormItem>

                    <FormItem
                        label={'密码'}
                        labelCol={{
                        span: 6
                    }}
                        wrapperCol={{
                        span: 14
                    }}>
                        <Input
                            value={this.state.pass}
                            onChange={(e) => this.setState({pass: e.target.value})}
                            addonBefore={< Icon type = "lock" />}
                            type="password"
                            placeholder="Password"/>
                    </FormItem>
                    <Row>
                        <Col push={6} span={3}>
                            <Button onClick={this.login}>登录</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col push={6} span={3}>
                            <Button onClick={this.logout}>退出</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    },
    login() {
        var that = this;
        var query = {
            name: this.state.name,
            password: this.state.pass
        }
        request
            .get(host + api.login)
            .query(query)
            .withCredentials()
            .end(function (err, res) {
                var data = res.body;
                console.log(data)
                if (data.noLogin) {

                } else {
                    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
                    ReactDOM.render(
                        <div className="App">
                        <Provider store={store}>
                            <R/>
                        </Provider>
                    </div>, document.getElementById('root'))

                }
            })
    },
    logout() {}
});
export default Login