//import axios from 'axios'
import PubSub from 'pubsub-js'
import React, { Component } from 'react'

export default class Search extends Component {
    search = async() =>{
        const {keyWordElement:{value:keyword}} = this
        PubSub.publish('state',{isFirst:false,isLoading:true})
        //send http request
        // axios.get(`http://localhost:3000/api1/search/users2?q=${keyword}`).then(
        //     response => {
        //         PubSub.publish('state',{isLoading:false, users:response.data.items})
        //     },
        //     error => {PubSub.publish('state',{isLoading:false, err: error.message})}
        // )

        // fetch(`http://localhost:3000/api1/search/users2?q=${keyword}`).then(
        //     response => {console.log('success',response);
        //     return response.json()
        //     }
        // ).then(
        //     response => {console.log('success ', response);},
        // ).catch(
        //     (error) => {console.log(error)}
        // )
        try {
            const response  = await fetch(`http://localhost:3000/api1/search/users2?q=${keyword}`)
            const data = await response.json()
            console.log(data)
            PubSub.publish('state',{isLoading:false, users:data.items})
        } catch (error) {
            console.log('fail',error)
            PubSub.publish('state',{isLoading:false, err: error.message})
        }

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
