/**
 * Created by pingfengafei on 3/22/17.
 */

import React from 'react';

import Ttem from './item/ItemWrap';

import './Navigation.less';

const navConfig = [
  {
    icon: 'lock',
    title: '一级导航栏-用户',
    child: [
      {
        icon: 'edit',
        title: '1-用户'
      },
      {
        icon: 'file',
        title: '2-用户'
      },
      {
        icon: 'delete',
        title: '3-用户',
        child: [
          {
            icon: 'search',
            title: '三级菜单'
          }
        ]
      }
    ]
  },
  {
    icon: 'reload',
    title: '一级导航栏-设备',
    child: [
      {
        title: '1-设备'
      },
      {
        title: '2-设备'
      },
      {
        title: '3-设备',
        child: [
          {
            title: '三级菜单'
          }
        ]
      }
    ]
  },
  {
    icon: 'star',
    title: '一级导航栏-订单',
    child: [
      {
        title: '1-订单'
      },
      {
        title: '2-订单'
      },
      {
        title: '3-订单',
        child: [
          {
            title: '三级菜单'
          }
        ]
      }
    ]
  }
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
    const nav = navConfig.map((val, index) =>
      <Ttem key={`nav-${index}`} data={val}/>
    );
    
    return (
      <div className="lf-navigation">
        {nav}
      </div>
    );
  }
}

export default Navigation;