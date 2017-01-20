/**
 * Created by pingfengafei on 17/1/20.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Carousel.less';

class Content extends Component {
  constructor(props) {
    super(props);
    this.timeId = null;
    this.state = {
      index: 0
    }
    this.changeVisiableContent = this.changeVisiableContent.bind(this);
  }
  
  changeVisiableContent(index) {
    //index : 下标
    let node = ReactDOM.findDOMNode(this);
    let marginTop = getComputedStyle(ReactDOM.findDOMNode(this)).marginTop;
    node.style.marginTop = (Number.parseInt(marginTop) - 270) + 'px';
  }
  
  componentDidMount() {
    this.timeId = setInterval(() => {
      this.changeVisiableContent();
    }, 2000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  
  render() {
    let {children} = this.props;
    return (
      <div className="carousel-content">
        {children}
      </div>
    );
  }
}

export default Content;

