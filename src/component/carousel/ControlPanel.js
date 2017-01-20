/**
 * Created by pingfengafei on 17/1/19.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dot from './Dot';
import './Carousel.less';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(index) {
    this.props.clickIndex(index);
  }
  
  render() {
    const {amount, activeIndex} = this.props;
    let dots = [];
    for (let i = 0; i < amount; i++) {
      dots.push(
        <Dot key={`ant-carousel-dots-${i}`} handleClick={this.handleClick} index={i} active={this.props.active}/>
      );
    }
    
    return (
      <ul className="ant-carousel-panel">
        {dots}
      </ul>
    );
  }
}

export default ControlPanel;

