/**
 * Created by pingfengafei on 17/1/16.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Icon from '../icon/index';
import './Button.less';


/**
 * 所有一切都是在原生button上操作
 */

class Button extends Component {
  /**
   * setTimeout, setInternal返回一个句柄id，该id可以被clearTimeOut,clearInternal取消
   * so，可以防止多次点击，前后样式重叠。
   */
  constructor(props) {
    super(props);
    this.addBtnClickedStyle = null;
    this.cancelBtnClickedStyle = null;
    ['handleClick', 'removeClassName'].forEach((value) => {
      this[value] = this[value].bind(this);
    })
  }
  
  removeClassName(button) {
    button.className = button.className.replace(' btn-clicked', '');
  }
  
  handleClick() {
    const buttonNode = ReactDOM.findDOMNode(this);
    this.removeClassName(buttonNode);
    this.addBtnClickedStyle = setTimeout(() => {
      buttonNode.className += ' btn-clicked'
    }, 10);
    clearTimeout(this.cancelBtnClickedStyle);
    this.cancelBtnClickedStyle = setTimeout(()=>{this.removeClassName(buttonNode)}, 500);
    
    if (this.props.handleClick) {
      this.handleClick();
    }
  }
  
  componentWillUnmount() {
    if (this.addBtnClickedStyle) {
      clearTimeout(this.addBtnClickedStyle);
    }
    if (this.cancelBtnClickedStyle) {
      clearTimeout(this.cancelBtnClickedStyle);
    }
  }
  
  render() {
    const {type, htmlType, className, icon, shape, size, loading, children, ...others} = this.props;
    
    /**
     * button.type是原生button的类型，不是组件的type
     * submit reset button menu
     * loading是转圈圈的按钮
     * ...others 处理其他样式
     */
    
    let classname = classNames(
      'ant-btn',
      className,
      {[`ant-btn-${type}`]: !!type},
      {[`ant-btn-${shape}`]: !!shape},
      {[`ant-btn-${size}`]: !!size}
    );
    let childNode = null;
    if (children) {
      let classes = classNames({'ant-btn-left': !!icon});
      childNode = (<span className={classes}>{children}</span>);
    }
    
    return (
      <button
        className={classname}
        {...others}
        type={htmlType || 'button'}
        onClick={this.handleClick}
      >
        <Icon type={icon} spin={loading ? true : false}/>
        {childNode}
      </button>
    );
  }
}

export default Button;