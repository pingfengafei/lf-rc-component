/**
 * Created by pingfengafei on 17/1/19.
 */
import React, {Component} from 'react';
import Dot from './Dot';
import './Carousel.less';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(index) {
    this.props.clickDot(index);
  }
  
  shouldComponentUpdate(nextProps) {
    return nextProps.active !== this.props.active;
  }
  
  render() {
    const {amount, active} = this.props;
    let dots = [];
    for (let i = 0; i < amount; i++) {
      dots.push(
        <Dot key={`ant-carousel-dots-${i}`} handleClick={this.handleClick} index={i} active={active}/>
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

