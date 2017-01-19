/**
 * Created by pingfengafei on 16/12/23.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './style/index.less';
import Home from './layout/home';
require('font-awesome/css/font-awesome.css');

/**
 * 注意，index和home的顺序很重要
 * index.less中引入了样式后加入后，home引入的组件的样式就会被覆盖掉
 */


ReactDOM.render(<Home></Home>, document.getElementsByClassName('root')[0]);
