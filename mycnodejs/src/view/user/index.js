import React, { Component } from 'react'
import { Timeline,Descriptions,Card,Avatar,Row,Col, } from 'antd';
import data from "./data"
import UserList from "./userList"

class User extends Component {
  render() {
    console.log(data);
    
    return (
      <div className="userbox">
        <div className="wrap">
          <Card type="inner" title="用户信息" extra={<a href="#">More</a>}>
            <Descriptions title="User Info">
              <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
              <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
              <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
              <Descriptions.Item label="Remark">empty</Descriptions.Item>
              <Descriptions.Item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
              </Descriptions.Item>
            </Descriptions>
            <Timeline mode="left">
              <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
              <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
              <Timeline.Item>Technical testing</Timeline.Item>
              <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
            </Timeline>
          </Card>
          <div className="userInfomain">
              <Avatar src={data.data.avatar_url} className = "userAvatar" size={64} />
              <Row className="userInfo">
                <Col md={8}>
                    用户名:<a>{data.data.loginname}</a>
                </Col>
                <Col md={8}>
                    积分:<a>{data.data.score}</a>
                </Col>
                <Col md={8}>
                    注册时间:<a>{data.data.create_at.split("T")[0]}</a>
                </Col>
              </Row>
              <UserList
                loading={false}

                recentReplies={data.data.recent_replies}
              >


              </UserList>
          </div>  
          
        </div>
      </div>
    )
  }
}

export default User