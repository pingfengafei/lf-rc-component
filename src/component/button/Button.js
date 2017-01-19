/**
 * Created by pingfengafei on 17/1/16.
 */

import React, {Component} from 'react';
import classNames from 'classnames';
import Icon from '../icon/index';


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
    return (
      <button {...others} type={htmlType || 'button'}>
        <Icon type={icon} spin={loading ? true : false}/>{children}
      </button>
    );
  }
}

export default Button;