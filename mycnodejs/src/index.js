import React from 'react';
import ReactDOM from 'react-dom';
import './statics/style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 入口文件 引入路由 ,然后再去 App.js 中引入 router
import {HashRouter} from 'react-router-dom'

// import {BrowserRouter} from "react-router-dom"   该写法 会去掉路由中的#，使用嵌套方法类似HashRouter



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <HashRouter>
     <App />
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
