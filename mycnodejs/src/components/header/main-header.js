import React, { Component } from 'react'
import {Layout,Row,Col,Divider,Menu} from "antd"
import { RedditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class MainHeader extends Component {
  render() {
    return (
      <Layout.Header className="top-header" theme="dark">
        <Row className="wrap">
          <Col xs={2} sm={4} md={8} lg={8} xl={8}>
            <div className="toplogo">
              <div className="logotitle flex-hc">
                <RedditOutlined style={{ fontSize: '55px', color: '#ffffff' }}/>  
                <span className='txt'> Reddit redesign teardown </span>
              </div>
            </div>
          </Col>
          <Col xs={20} sm={16} md={14} lg={14} xl={14} className="flex flex-hc">
            <Divider type="vertical"  className="headerDiver" />
            <Menu mode="horizontal" theme="dark">
              <Menu.Item>
                <Link to="/index">首页</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/book">教程</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/about">关于</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/Dyindex">抖音</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>  
       </Layout.Header>
    )
  }
}


export default  MainHeader

