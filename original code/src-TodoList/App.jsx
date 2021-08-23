import React, { Component } from 'react'
import Header from './components/Header/index'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
    state = {
        todos:[
            {id:"001",name:"eat",done:true},
            {id:"002",name:"sleep",done:false},
            {id:"003",name:"shit",done:false},
        ]
    }

    addTodo = (todoObj) =>{
        console.log(todoObj)
        //获取原todos值
        const {todos} = this.state
        const todos2 = [todoObj,...todos]
        this.setState({todos:todos2})
    }

    //更新是否勾选
    updateTodo = (id, done) =>{
        const {todos} = this.state
        const newtodos = todos.map((todoObj)=>{
            if(todoObj.id === id) return {...todoObj, done}
            else return todoObj
        })
        this.setState({todos:newtodos})
    }

    deleteTodo =(id) => {
        const {todos} = this.state
        const newtodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos:newtodos})
    }

    checkAllTodo = (done) => {
        const {todos} = this.state
        const newtodos = todos.map((todoObj)=>{
            return {...todoObj, done:done}
        })
        this.setState({todos:newtodos})
    }

    deleteAllDone = () => {
        const {todos} = this.state
        const newtodos = todos.filter((todoObj) => {
            return !todoObj.done
        })
        this.setState({todos:newtodos})
    }
    render() {
        const {todos} = this.state
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header addTodo = {this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteAllDone = {this.deleteAllDone}/>
                </div>
            </div>
        )
    }
}
