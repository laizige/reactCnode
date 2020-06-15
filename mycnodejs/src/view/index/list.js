import React, { Component } from 'react'
import {List,Avatar} from "antd"
import {Link} from "react-router-dom"
import "./home.css"
import data from "./data"
import TxtTag from "../txtTag";

class IndexList extends Component {
  render() {
    // let {loading,data} = this.props;
        // console.log(this.state.page);
        // let pagination = {
        //     current: this.state.page,
        //     pageSize: 10,
        //     total: 1000,
        //     onChange:((current)=>{
        //         this.setState({
        //             page: current
        //         });
        //     })
        // };
    return (
      <List
            className="indexList"
            loading = {false}
            // dataSource = {data}
            dataSource = {data.data}
            // pagination= {this.isStart?false:pagination}
            renderItem = {item=>(<List.Item
                actions={[
                    "回复:"+item.reply_count,
                    "访问:"+item.visit_count
                ]}
                // 加key
                key = {item.id}
            >
                <List.Item.Meta
                    avatar={<Avatar src={item.author.avatar_url} />}
                    title = {<div>
                        <TxtTag data={item}/>
                        <Link to={"/details/"+item.id} >{item.title}</Link>
                    </div>}
                    description={(<p>
                        <Link to={"/user/"+item.author.loginname}>{
                            item.author.loginname
                        }</Link>
                        发表于:{item.create_at.split("T")[0]}
                    </p>)}
                />
            </List.Item>)}
        >
        </List>
    )
  }
}

export default IndexList