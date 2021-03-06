import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// 引入首页模块
import Index from '../view/index/index'
import Book from '../view/book/index'
import About from '../view/about/index'
import User from '../view/user/index'
import Details from '../view/details/index'
import Dyindex from "../view//douyin/index" 

class RouterIndex extends Component{
  render(){
    return(
      <Switch>
        {/* 首页这句是重定向 */}
        <Route path="/"  exact
          render={()=>(
            <Redirect to ="/index" />
          
        )}/>

        <Route path="/index" component={Index} />
        <Route path="/book" component={Book} />
        <Route path="/about" component={About} />
        <Route path="/user" component={User} />
        <Route path="/details" component={Details} />
        <Route path="/Dyindex" component={Dyindex} />    
      </Switch>
    )
    
  }
}

export default RouterIndex