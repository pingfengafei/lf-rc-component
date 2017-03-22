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
    let {type, spin, className = ''} = this.props;
    if (!!spin || type === 'loading') {
      type = 'loading';
    }
    
    let classNames1 = classNames('anticon', className, {'anticon-spin': !!spin || type === 'loading'}, `icon-${type}`);
    return <i className={classNames1}/>;
  }
}

Icon.PropTypes = {
  type: React.PropTypes.string,
  spin: React.PropTypes.any,
  classNames: React.PropTypes.string
};

export default Icon;