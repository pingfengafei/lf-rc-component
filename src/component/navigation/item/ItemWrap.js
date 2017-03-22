/**
 * Created by pingfengafei on 3/22/17.
 */

import React from 'react';
import classNames from 'classnames';
import  ChildItem from './ChildItem';
import ParentItem from './ParentItem';


import './Item.less';

class ItemWrap extends React.Component {
  constructor(props) {
    super(props);
    this.generateNavItem = this.generateNavItem.bind(this);
  }
  
  //使用fontawsome图表
  static defaultProps = {
    title: '父导航栏',
    icon: 'areachart',
    child: [
      {
        icon: 'down',
        title: 'child one'
      },
      {
        icon: 'down',
        title: 'child two'
      },
      {
        icon: 'down',
        title: 'child three',
        child: [
          {
            icon: 'down',
            title: 'child-child-one'
          }
        ]
      }
    ]
  };
  
  generateNavItem(item) {
    if (item.child) { //有子菜单
      const child = item.child.map((content, index) => {
        return this.generateNavItem(content);
      });
      return (
        <ParentItem key={`item-parent-${item.title}`} icon={item.icon} title={item.title}>
          {child}
        </ParentItem>
      );
    } else { //没有子菜单
      return (
        <ChildItem key={`item-children-${item.title}`} icon={item.icon} title={item.title}/>
      );
    }
  }
  
  render() {
    let item = this.generateNavItem(this.props.data);
    return (
      <div className="item">
        {item}
      </div>
    );
  }
}

export default ItemWrap;