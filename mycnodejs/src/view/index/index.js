import React, { Component } from 'react'
import {Menu,Row,Col} from "antd"
import {Link} from "react-router-dom"
import "./home.css"
import IndexList from "./list"

class Index extends Component {
  render() {
    return (
      <div className="wrap home_main">
        <Row>
          <Col xs={2} sm={4} md={6} lg={4} xl={6}>
          <Menu className="indexMenu">
            <Menu.Item>
              <Link to="/index/ask">全部</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/good">精华</Link>
            </Menu.Item> 
            <Menu.Item>
              <Link to="/index/ask">问题</Link>
            </Menu.Item> 
            <Menu.Item>
              <Link to="/index/ask">全部</Link>
            </Menu.Item> 
            <Menu.Item>
              <Link to="/index/share">分享</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/job">招聘</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/index/dev">测试</Link>
            </Menu.Item>      
          </Menu> 
          </Col>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            {/* {首页index菜单组件} */}
          </Col>   
          <Col xs={20} sm={16} md={18} lg={20} xl={18} className="homeRight">
              <IndexList/>
          </Col>  
      </Row>
      </div>
    )
  }
}

export default Index