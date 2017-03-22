/**
 * Created by pingfengafei on 2/14/17.
 */

import  React from 'react';
import './DropDown.less';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPanel: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  
  static defaultProps = {
    selectedIndex: 0,
    dropDownList: ['最近1天', '最近7天', '最近30天']
  };
  
  handleClick(val, index) {
    if (this.props.handleClick) {
      this.props.handleClick(val, index);
    }
  }
  
  handleMouseOver() {
    this.setState({showPanel: true});
  }
  
  onMouseLeave() {
    this.setState({showPanel: false});
  }
  
  render() {
    let {selectedIndex, dropDownList, style} = this.props;
    
    let list = dropDownList.map((val, index) => {
      return (
        <li className="list-node"
            key={`drop-down-${index}`}
            onClick={this.handleClick.bind(this, val, index)}>
          <span className="value">{val}</span>
        </li>
      );
    });
    let ulList = this.state.showPanel ?
      <div className="list-wrap">
        <ul className="drop-down-list">
          {list}
        </ul>
      </div>
      : null;
    
    return (
      <div className="mofa-drop-down"
           style={style}
           onMouseOver={this.handleMouseOver}
           onMouseLeave={this.onMouseLeave}
      >
        <div className="selected-item">
          <span className="item">{dropDownList[selectedIndex]}</span>
          <i className='fa fa-caret-down text-primary' style={{float: 'right', marginTop: '5px'}}/>
        </div>
        {ulList}
      </div>
    );
  }
}

export default DropDown;