import axios from 'axios'
import React, { Component } from 'react'

export default class Search extends Component {
    search = () =>{
        const {keyWordElement:{value:keyword}} = this
        this.props.updateAppState({isFirst:false,isLoading:true})
        //send http request
        axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
            response => {
                this.props.updateAppState({isLoading:false, users:response.data.items})
            },
            error => {this.props.updateAppState({isLoading:false, err: error.message})}
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c } type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
