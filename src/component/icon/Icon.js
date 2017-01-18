/**
 * Created by pingfengafei on 17/1/16.
 */
import React, {Component} from 'react';
import classNames from 'classnames';
import './Icon.less';

class Icon extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {type, spin, className = ''} = this.props;
    let classNames1 = classNames('anticon', className, {'anticon-spin': !!spin || type === 'loading'}, `icon-${type}`);
    return <i className={classNames1}/>;
  }
}

export default Icon;