This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# React 实战项目《cNode》开发
这是一个 以cNode为例的 react实战开发项目，项目中涉及到 React，Redux，antd 等 技术点的应用，是一个特别不错的 React + antd 的练手项目 
## 技术栈
- create-react-app
- react
- redux
- react-redux
- redux-thunk    处理异步请求
- react-router-dom
- axios
- antd

#antd 按需加载组件的配置


## API接口
这里使用的是 cnodejs 官网给出的数据接口，接口文档地址：https://cnodejs.org/api

## 涉及知识前置说明：
- react 和 redux 相关的知识，大家可以在查看 https://github.com/motao314/React_note
- antd 可以参考 design 官网文档，讲解的很详细，但然在后续的视频中也会涉及 antd的使用，官网地址：https://ant.design/index-cn

## 说明
**该项目我会以视频的形式给大家讲解，视频最终会放入妙味官网的[视频板块](http://2017.miaov.com/study)**

## 视频课程大纲
- 环境安装
	1. `create-react-app my_cnode` 创建项目
	2. `cd my_cnode` 进入目录	
	3. `npm i redux -S` 安装redux
	4. `npm i react-redux -S` 安装redux
	5. `npm i redux-thunk -S` 安装中间件
	6. `npm i react-router-dom -S` 安装react路由
	7. `npm i axios -S` 安装axios
	8. `npm i antd -S` 安装antd
	9. 修改配置环境，以适应 antd([官网参考](https://ant.design/docs/react/use-with-create-react-app-cn))
		- `npm i react-app-rewired -D`   开发环境的依赖
		- 修改package.json的启动配置
		`
			"scripts": {
			    "start": "react-app-rewired start",
			    "build": "react-app-rewired build",
			    "test": "react-app-rewired test --env=jsdom",
			    "eject": "react-scripts eject"
			  }
		`	
		- `npm i babel-plugin-import -D`
		- 项目根目录创建config-overrides.js
		`
		  const { injectBabelPlugin } = require('react-app-rewired');
		  module.exports = function override(config, env) {
		  	config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
		    return config;
		  };
		`
		##这段配置文件失效了，请参考ant 官网

- 视图
	- 视图结构划分
  - 1:将效果图划分为5大部分，在src->目录新建view,创建5个视图文件夹
	- 2：路由配置
  #组件继续拆分
	- minHeader 组件
		- antd 响应式设计及栅格组件使用
		- antd {Layout, Row, Col, Menu, Icon, Divider，Dropdown} 等组件使用
	- minFooter 组件
	- Index 首页视图
		- 相关子视图及路由配置（全部、精华、问答、分享、招聘、测试）
		- param 参数
		- antd List组件、Pagination组件、Tag组件 使用讲解
	- Details 文章详情视图
		- Card 组件 使用讲解
		- dangerouslySetInnerHTML 方法		
	- User 用户视图  
	- Book 教程视图 和 About 关于视图

- 数据处理
	- redux的异步处理 
	- 中间件讲解
	- redux-thunk使用
	- 相关 reducer 处理
		- list.reducers
		- details.reducers
		- user.reducers
- 更新相关数据获取，完善整个项目		
				
		
git remote add origin git@github.com/laizige/reactCnode.git

https://github.com/laizige/reactCnode.git


git remote add origin git@github.com:git-ze/xxxx.git






<video
            id="video" 
            // src={this.state.videoData.video.play_addr_lowbr.url_list[0]} 
            src="https://api.amemv.com/aweme/v1/play/?video_id=v0200f9f0000brl13ftjfrmhhde5v1v0&line=1&ratio=540p&media_type=4&vr_type=0&improve_bitrate=0&is_play_url=1&is_support_h265=0&source=PackSourceEnum_PUBLISH"
            controls = "true"
            poster="http://img.jj20.com/up/allimg/tx23/320420021029915.jpg" /*视频封面*/
            preload="auto" 
            webkit-playsinline="true" /*这个属性是ios 10中设置可以
                              让视频在小窗内播放，也就是不是全屏播放*/  
            playsinline="true"  /*IOS微信浏览器支持小窗内播放*/ 
            x-webkit-airplay="allow" 
            x5-video-player-type="h5"  /*启用H5播放器,是wechat安卓版特性*/
            x5-video-player-fullscreen="true" /*全屏设置，
                              设置为 true 是防止横屏*/
            x5-video-orientation="portraint" //播放器支付的方向， landscape横屏，portraint竖屏，默认值为竖屏
            style="object-fit:fill">
          </video>

<video preload="auto" type="video/mp4" className="video-player" src="http://txmov2.a.yximgs.com/upic/2020/02/07/14/BMjAyMDAyMDcxNDQ0NTdfNjkwMjYwNjE2XzIzMDc5NzUyNzAwXzFfMw==_b_B31328611b0d9220320708d7d3dc07b21.mp4">
          </video>
          
          {/* <video id="theVideo" className="video-player" src="https://aweme.snssdk.com/aweme/v1/playwm/?video_id=v0200fa80000brj0kapum7luqc3te0tg&amp;ratio=720p&amp;line=0" preload="auto" type="video/mp4" width="100%" webkit-playsinline="true" playsinline="true" x5-video-player-type="h5" x5-video-player-fullscreen="portraint" onerror="window.VIDEO_FAILED=1"></video> */}
          

分享一个漂亮的小姐姐短视频播放网页源码
https://www.12580sky.com/wangzhanyuanma/16403.html					
具体功能看图，需要的自取，技术有限，不喜勿喷！

Gayhub：
https://github.com/JMWpower/xiaojiejie

Gitee：
https://gitee.com/JmwPower/xiaojiejie

演示地址：
http://xjj.jmwpower.top/



API 接口
https://www.12580sky.com/wangzhanyuanma/6523.html



<!-- 播放器文档 -->

https://video-react.js.org/components/player/
https://www.cnblogs.com/cckui/p/12407936.html
https://www.cnblogs.com/mryaohu/p/12254520.html


短视频
https://quanmin.hao222.com/sv?source=share-h5&pd=channel-na&vid=3261997361124101569