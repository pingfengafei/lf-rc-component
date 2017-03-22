/**
 * Created by pingfengafei on 3/22/17.
 */

import React from 'react';
import classNames from 'classnames';

import './Title.less';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  //使用fontawsome图表
  static defaultProps = {
    title: '父导航栏',
    icon: 'bar-chart'
  };
  
  handleClick() {
    
  }
  
  render() {
    const {icon, title} = this.props;
   /* let cls = classNames('anticon', {'anticon-spin': !!spin || type === 'loading'}, `icon-${icon}`);*/
   let cls = '';
    return (
      <ul className="lf-navigation-title" onClick={this.handleClick}>
        <span className={cls}></span>
        <span>{title}</span>
        <span>箭头</span>
      </ul>
    );
  }
}

export default Title;