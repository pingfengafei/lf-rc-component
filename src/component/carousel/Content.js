/**
 * Created by pingfengafei on 17/1/20.
 */
import React, {Component} from 'react';

/**
 * yarn add react-addons-css-transition-group
 */
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import ReactDOM from 'react-dom';
import './Carousel.less';

/**
 * 最终认识到，在react里直接操作dom是个危险且需要细细考虑的问题。
 * 在动画函数里setState，触发一次render，然后dom节点消失。js找不到dom节点了
 * 咖喱改改。
 *
 * 改进的方法，通过setState触发componentDidMount或componentDidUpdate，
 * 此时所有dom节点都渲染完成了，再用js操作dom
 */

class Content extends Component {
  constructor(props) {
    super(props);
    this.timeId = null;
    this.state = {
      index: 0
    };
    this._changeVisiableContent = this._changeVisiableContent.bind(this);
  }
  
  _changeVisiableContent() {
    let node = ReactDOM.findDOMNode(this);
    let distance = this.state.index * -270;
    node.style.transform = `translate3d(0px,${distance}px,0px)`;
    this.props.updateDot(this.state.index);
  }
  
  shouldComponentUpdate(nextProps) {
    return nextProps.active !== this.state.index;
  }
  
  componentDidMount() {
    let index = 0;
    this.timeId = setInterval(() => {
      this.setState({'index': (++this.state.index) % this.props.amount});
    }, 5000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  
  componentDidUpdate() {
    this._changeVisiableContent();
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.state.index) {
      this.setState({index: nextProps.active});
    }
  }
  
  render() {
    let {children} = this.props;
    return (
      <div className="carousel-slide-list">
        {children}
      </div>
    );
  }
}

export default Content;

