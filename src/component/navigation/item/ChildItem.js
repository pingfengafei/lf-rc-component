/**
 * Created by pingfengafei on 3/22/17.
 */

import React from 'react';
import classNames from 'classnames';

import './Item.less';

class ChildItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {icon, title} = this.props;
    let iconNode = null;
    
    if (icon) {
      const iconCls = classNames('icon', 'anticon', `icon-${icon}`);
      iconNode = <span className={iconCls}></span>;
    } else {
      iconNode = null;
    }
    
    return (
      <li style={{marginLeft: '15px'}}>
        {iconNode}
        <span>{title}</span>
      </li>
    );
  }
}

export default ChildItem;