/**
 * Created by pingfengafei on 3/22/17.
 */

import React from 'react';
import classNames from 'classnames';

import './Item.less';

class ParentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({open: !this.state.open});
  }
  
  render() {
    const {icon, title} = this.props;
    let iconNode;
    const arrowCls = classNames('icon-arrow', 'anticon', 'icon-down', {'icon-arrow-open': this.state.open});
    
    if (icon) {
      const iconCls = classNames('icon', 'anticon', `icon-${icon}`);
      iconNode = <span className={iconCls}></span>;
    } else {
      iconNode = null;
    }
    
    let child = this.state.open ? this.props.children : null;
    
    return (
      <div style={{marginLeft: '15px'}}>
        <li onClick={this.handleClick}>
          {iconNode}
          <span>{title}</span>
          <span className={arrowCls}></span>
        </li>
        {child}
      </div>
    );
  }
}

export default ParentItem;