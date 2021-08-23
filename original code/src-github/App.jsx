import React, { Component } from 'react'
import Search from './components/search'
import List from './components/list'

export default class App extends Component {
    state = {
        users:[],
        isFirst:true, //webpage is first opened
        isLoading:false, //is requesting data
        err: '', //restore request error
    }

    saveUsers = (users) =>{
        this.setState({users:users.items})
    }

    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}
