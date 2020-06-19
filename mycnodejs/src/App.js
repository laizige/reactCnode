import React from 'react';
import './statics/style/App.css';
import 'antd/dist/antd.css'
import './statics/style/common.css'
import "../node_modules/video-react/dist/video-react.css"; // import css

import RouterIndex from './router/index'

import MainHeader from "./components/header/main-header"
import MainFooter from "./components/footer/main-footer"

function App() {
  return (
    <div className="AppWrap">
      <MainHeader/>
      <RouterIndex/>
      <MainFooter/>
    </div>
  );
}

export default App;
