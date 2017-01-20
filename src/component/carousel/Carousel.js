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
    this.handleClickIndex = this.handleClickIndex.bind(this);
  }
  
  handleMouseOver() {
    //this.setState({showPanel: true})
    console.log('over');
  }
  
  handleMouseOut() {
    // this.setState({showPanel: false})
  }
  
  handleClickIndex(index) {
    this.setState({active: index});
  }
  
  // shouldComponentUpdate(nextProps, nextStates) {
  //   console.log(nextStates.showPanel);
  //   return this.state.showPanel !== nextStates.showPanel;
  // }
  
  render() {
    let {children} = this.props;
    let panel = <ControlPanel amount={children.length} active={this.state.active} clickIndex={this.handleClickIndex}/>;
    let content = <Content active={this.state.active}>{children}</Content>
    return (
      <div className="ant-carousel">
        {panel}
        {content}
      </div>
    );
  }
}

export default Carousel;

