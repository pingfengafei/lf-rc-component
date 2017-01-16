/**
 * Created by pingfengafei on 17/1/16.
 */
import React, {Component} from 'react';
import classNames from 'classnames';

class Icon extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {type, spin, className = ''} = this.props;
    let classNames1 = classNames(className, 'anticon', `icon-${type}`, {'anticon-spin': !!spin || type === 'loading'});
    return <i className={classNames1}/>;
  }
}

export default Icon;