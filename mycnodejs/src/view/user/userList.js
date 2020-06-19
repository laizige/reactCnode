import React, { Component } from 'react'
import {Card,Avatar,List} from "antd";
import { Link } from 'react-router-dom';

export default class ReplyList extends Component {
  render() {
    let {loading,recentReplies} = this.props;
    console.log(recentReplies);
    
    
    return (
      <Card
        loading={loading}
        title="历史回复"
        type="inner"
      >
        <List
          className="demo-loadmore-list"
          loading={loading}
          itemLayout="vertical"
          dataSource={recentReplies}
          renderItem={item => (
            <List.Item
              key={item.id}
              extra={item.length>0?<span>有{item.length}人点赞</span>:''}
            >
              <List.Item.Meta
                avatar={
                  // <Avatar src={item.author.avatar_url} />
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                // title={item.author.loginname}
                description={
                <div>
                <Link to={"/user/"+ item.author.loginname}>
                  {item.author.loginname}
                  
                </Link>
                <span className="m-left15">发表于{item.last_reply_at.split("T")[0]}</span>
                </div> }
              >  
                
              </List.Item.Meta>
              <div className="replacebox"
                  dangerouslySetInnerHTML={
                    {__html:item.content}
                  }
                >
                </div> 
            </List.Item>
          )}
        >

        </List>  
      </Card>  
    )
  }
}
