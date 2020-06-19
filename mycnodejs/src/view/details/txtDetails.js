import React, { Component } from 'react';
import {Card,Avatar} from "antd";
import {Link} from "react-router-dom";
import TxtTag from "../txtTag"

export default class TxtDetails extends Component {
  render() {
    let {loading,data} =this.props;

    const tiele =(<div>
      <h1>{data.title}</h1>
      <div className="flex-hc detilUinfo">
        <TxtTag data={data} />
        <Avatar src={data.author.avatar_url}></Avatar>
        <Link to={"/user/"+data.author.loginname}>{data.author.loginname}</Link>
        <span className="m-left15 time ft12">发表于：{data.create_at.split("T")[0]}</span>
      </div> 
    </div>)
    return (
      <div>
        <Card title={tiele} loading={loading}>
                <div
                  dangerouslySetInnerHTML={
                    {__html:data.content}
                  }
                >

                </div>  
        </Card>
      </div>
    )
  }
}
