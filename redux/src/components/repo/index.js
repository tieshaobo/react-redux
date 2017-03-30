import React from 'react'

var Repo = React.createClass({
    render(){
        return (
            <div>Repo</div>
        )
    }
})
import {connect} from 'react-redux'
var store2props = function(store){
    return {

    }
}
var Re = connect(store2props)(Repo)
export default Re