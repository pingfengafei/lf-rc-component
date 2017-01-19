/**
 * Created by pingfengafei on 17/1/19.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Carousel.less';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  
  handleMouseOver() {
    //this.setState({showPanel: true})
    console.log('over');
  }
  
  handleMouseOut() {
    // this.setState({showPanel: false})
  }
  
  // shouldComponentUpdate(nextProps, nextStates) {
  //   console.log(nextStates.showPanel);
  //   return this.state.showPanel !== nextStates.showPanel;
  // }
  
  render() {
    let panel;
    panel = (
      <div className="ant-carousel-panel"></div>
    );
    
    return (
      <div className="ant-carousel">
        {panel}
      </div>
    );
  }
}

export default Carousel;

