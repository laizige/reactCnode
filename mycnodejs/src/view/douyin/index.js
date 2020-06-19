import React, { Component } from 'react'
import {Avatar,List,Space ,Modal,Button } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined,VideoCameraAddOutlined } from '@ant-design/icons';
import data from "./data2"
import {Player, ControlBar, ReplayControl,
  　　　　ForwardControl, CurrentTimeDisplay,
  　　　　TimeDivider, PlaybackRateMenuButton, VolumeMenuButton} from 'video-react';



export default class Dyindex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false, 
      // posts: [],
      // comments: [],
      videoData:{},
    };
  }

  // state = { visible: false, };


  showModal = (res) => {
    console.log('传进来的res',res);
    let itemData =res;
    // this.setState({
    // visible: true,
    // videoData:itemData,
    // });
    this.setState({
      visible: true,
      videoData:itemData,
    }, () => {
      // Blah blah
      console.log(321);
    })

    console.log('this.state.videoData',this.state.videoData);

    // this.videoData=res;
  };


  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  


  render() {
    let listData =data.aweme_list;
    console.log("listData",listData);
    // icon
    const IconText = ({ icon, text }) => (
      <Space>
        {React.createElement(icon)}
        {text}
      </Space>
    );
    return (
      <div className="douyinMain">
        <div className="wrap">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.aweme_id}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="300" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={150}
                alt="封面"
                // src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                src={item.video.cover.url_list[0]}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatar_medium.url_list[0]} />}
              title={item.author.nickname}
              description={item.author.signature}
            /> 
            <div className="dyinfobox ">
              <p>{item.desc}</p>
              <div className="flex-hc">
                <Button type="primary" icon={<VideoCameraAddOutlined />} onClick={this.showModal.bind(this,item)}  size="middle">播放</Button>
              </div>
            </div>

            
          </List.Item>
          

        )}
      />
          <Modal
          title="视频Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          destroyOnClose="false"
        >
          <p>{this.state.videoData.desc}</p>
          <Player className="videobox"
              playsInline
              autoPlay
              fluid={false}
              poster=""
              width="100%"
              height={500}
              src="https://video.pearvideo.com/mp4/third/20200615/cont-1680154-10787886-184910-sd.mp4"
            >
            <ControlBar>
              <ReplayControl seconds={10} order={1.1} />
              <ForwardControl seconds={30} order={1.2} />
              <CurrentTimeDisplay order={4.1} />
              <TimeDivider order={4.2} />
                <PlaybackRateMenuButton
                    rates={[5, 2, 1, 0.5, 0.1]}
                    order={7.1}
                />
                <VolumeMenuButton disabled />
            </ControlBar>
            </Player>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      

        </div>  
      </div>
    )
  }



}
