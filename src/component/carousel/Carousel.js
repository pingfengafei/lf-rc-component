/**
 * Created by pingfengafei on 17/1/19.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './ControlPanel';
import Content from './Content';

import './Carousel.less';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleClickDot = this.handleClickDot.bind(this);
    this.updateDot = this.updateDot.bind(this);
  }
  
  handleMouseOver() {
    //this.setState({showPanel: true})
    console.log('over');
  }
  
  handleMouseOut() {
    // this.setState({showPanel: false})
  }
  
  handleClickDot(index) {
    this.setState({active: index});
  }
  
  updateDot(index) {
    console.log(index);
    this.setState({active: index});
  }
  
  render() {
    let {children} = this.props;
    let panel = (
      <ControlPanel
        amount={children.length}
        active={this.state.active}
        clickDot={this.handleClickDot}
      />
    );
    let content = (
      <Content
        amount={children.length}
        active={this.state.active}
        updateDot={this.updateDot}
      >
        {children}
      </Content>
    );
    return (
      <div className="ant-carousel">
        {content}
        {panel}
      </div>
    );
  }
}

export default Carousel;

