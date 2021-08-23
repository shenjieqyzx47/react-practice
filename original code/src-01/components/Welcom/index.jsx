import React,{Component} from "react"
import welcom from './index.module.css'

export default class Welcom extends Component{
    render(){
        return (
            <h2 className={welcom.title}> Welcom </h2>
        )
    }
}