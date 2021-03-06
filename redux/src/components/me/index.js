import React from 'react'
import './index.css'
import {Link} from 'react-router'
var Me = React.createClass({    
    render(){
        const {project} = this.props;
        var nodes = project.map(function(obj,i){
            return (
                <li key={i}>
                    <Link to={"repo/"+obj.id}>
                        <p>{obj.name}</p>
                        <p>{obj.description}</p>
                    </Link>  
                </li>
            )
        })
        return (
            <div>
                <ul className="me-project">
                    {nodes}
                </ul>
            </div>
        )
    }
})
var store2props = function(store){
    return {
        project:store.me.project
    }
}
import {connect} from 'react-redux'
var M = connect(store2props)(Me)
export default M