import React from 'react'
import $ from 'jquery'

var ip = 'http://101.200.129.112:9527'
var Project = React.createClass({
    render(){
        return(
            <div>project</div>
        )
    },
    componentDidMount(){
        console.log(111)
        $.ajax({
            url:ip+'/deploy/myproject/',
            success:function(res){
                console.log(res)
            },
            crossDomain:true,
            contentType:'application/json',
            xhrFields:{
                withCredentials:true
            }
        })
    }
})

export default Project