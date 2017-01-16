/**
 * Created by pingfengafei on 17/1/16.
 */

import React, {Component} from 'react';
import classNames from 'classnames';


/**
 * 所有一切都是在原生button上操作
 */
class Button extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {type, htmlType, className, icon, shape, size, loading, children, onClick, ...others} = this.props;
    
    /**
     * button.type是原生button的类型，不是组件的type
     * submit reset button menu
     *
     * loading是转圈圈的按钮
     */
      
      // todos:写个Icon组件，现在临时先写着
    let iconType;
    if (loading) {
      iconType = 'icon-loading1';
    } else if (icon) {
      iconType = `icon-${icon}`;
    }
    
    return (
      <button
        {...others}
        type={htmlType || 'button'}
      ><i className={`anticon ${iconType}`}/>{children}</button>
    );
  }
}

export default Button;