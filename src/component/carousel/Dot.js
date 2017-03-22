/**
 * Created by pingfengafei on 17/1/20.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Carousel.less';

class Dot extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.handleClick(this.props.index);
  }
  
  render() {
    let node = null;
    if (this.props.active === this.props.index) {
      node = (<li className="ant-carousel-node-active" onClick={this.handleClick}></li>);
    } else {
      node = (<li className="ant-carousel-node" onClick={this.handleClick}></li>);
    }
    return node;
  }
}

export default Dot;