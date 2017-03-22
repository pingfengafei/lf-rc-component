/**
 * Created by pingfengafei on 3/22/17.
 */

import React from 'react';
import ReactDom from 'react-dom';
import Title from './title/Title';


import './Navigation.less';

const navConfig = [
  {
    icon: 'icon',
    title: 'navigation one',
    sub: [
      {
        icon: 'icon',
        title: 'child one'
      }
    ]
  },
  {},
  {}
];

/**
 * 先做垂直方向的导航栏
 * 只有2级菜单
 * 一步吃成一个大胖子，有点难
 */

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="lf-navigation">
        <Title />
      </div>
    );
  }
}

export default Navigation;