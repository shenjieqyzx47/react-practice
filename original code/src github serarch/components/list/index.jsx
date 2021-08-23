import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

    state = {
        users:[],
        isFirst:true, //webpage is first opened
        isLoading:false, //is requesting data
        err: '', //restore request error
    }

    componentDidMount(){
        this.token = PubSub.subscribe('state', (_,data)=>{
            this.setState(data)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>welcome, please enter name</h2>:
                    isLoading ? <h2>Loading.......</h2>:
                    err ? <h2 style = {{color:'red'}}>{err}</h2>:
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                <img alt="avatar" src={userObj.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
