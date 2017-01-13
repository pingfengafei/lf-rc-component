/**
 * Created by pingfengafei on 17/1/12.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './Rate.less';
import {getOffsetLeft} from './util';

/**
 * 难点在如何画半颗星星：
 * 1：画一个灰色的星星
 * 2：画一个着色的星星
 * 3：着色星星width：50%
 * 4：通过定位将着色的50%星星覆盖到灰色星星上
 *
 * 哈哈哈，发现yiminghe写的代码有bug，判断星星的距离有bug， 周末准备尝试一下
 * https://github.com/react-component/rate/blob/master/src/Rate.jsx
 */

class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    ['handleClick', 'handleMouseMove', 'handleMouseOut', 'getStarValue'].forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }
  
  handleClick(index, event) {
    if (this.props.disabled) {
      return;
    } else {
      let value = this.getStarValue(index, event.pageX);
      this.props.onChange(value);
    }
  }
  
  //用onMouseMove事件，不要用onMouseOver事件
  handleMouseMove(index, event) {
    if (this.props.disabled) {
      return;
    } else {
      let value = this.getStarValue(index, event.pageX);
      
      console.log(value);
      
      this.setState({value: value});
    }
  }
  
  handleMouseOut() {
    this.setState({value: this.props.value})
  }
  
  getStarValue(index, x) {
    let starNode = ReactDOM.findDOMNode(this.refs[`ref-rate-star-${index}`]);
    let left = getOffsetLeft(starNode);
    let starNodeWidth = parseInt(window.getComputedStyle(ReactDOM.findDOMNode(this.refs[`ref-rate-star-${index}`])).width);
    
    if (this.props.allowHalf && (x - left) < starNodeWidth / 2) { //半颗星
      return index + 0.5;
    } else { //一整颗星星
      return ++index;
    }
  }
  
  componentDidMount() {
    this.setState({value: this.props.value});
  }
  
  static propTypes = {
    count: PropTypes.number.isRequired, //星星总数
    value: PropTypes.number.isRequired, //当前的星星数
    defaultValue: PropTypes.number.isRequired, //已经打的星星数 //感觉没啥用
    selectColor: PropTypes.string.isRequired, //选中的颜色
    disabled: PropTypes.bool.isRequired, //可读还是可以修改
    onChange: PropTypes.func.isRequired, //回调函数
    allowHalf: PropTypes.bool.isRequired //是否允许半颗星
  };
  
  static defaultProps = {
    count: 10,
    value: 3,
    defaultValue: 3,
    selectColor: 'red',
    disabled: false,
    onChange: () => {
    },
    allowHalf: false
  };
  
  //2个同名的ref，使用findDOMNode返回null
  render() {
    // let {count, defaultValue, disabled, selectColor, onChange, allowHalf} = this.props;
    let {count} = this.props;
    let starList = [];
    for (let i = 0; i < count; i++) {
      let className = classNames(
        'anticon icon-star',
        {selected: i < Math.floor(this.state.value)},
        {cursor: this.props.disabled ? false : true},
      );
      
      //判断是否是半颗星
      if (i === Math.floor(this.state.value) && this.state.value % 1) { //带有半颗星
        let classNameWithHalfStarContainer = classNames(className, 'half-star-container');
        let classNameWithHalfStarContent = classNames(className, 'half-star-content');
        
        starList.push(<li key={`rate-star-list-${i}`}
                          ref={`ref-rate-star-${i}`}
                          onClick={this.handleClick.bind(this, i)}
                          onMouseMove={this.handleMouseMove.bind(this, i)}
                          onMouseOut={this.handleMouseOut.bind(this, i)}
                          className={classNameWithHalfStarContainer}
          >
            <li key={`rate-star-list-${i}`}
                onClick={this.handleClick.bind(this, i)}
                onMouseMove={this.handleMouseMove.bind(this, i)}
                onMouseOut={this.handleMouseOut.bind(this, i)}
                className={classNameWithHalfStarContent}
            />
          </li>
        );
      }
      else { //不带半颗星
        starList.push(<li key={`rate-star-list-${i}`}
                          ref={`ref-rate-star-${i}`}
                          onClick={this.handleClick.bind(this, i)}
                          onMouseMove={this.handleMouseMove.bind(this, i)}
                          onMouseOut={this.handleMouseOut.bind(this, i)}
                          className={className}
          />
        );
      }
    }
    
    return (
      <div className="rate-component-container">
        <ul>{starList}</ul>
      </div>
    );
  }
}

export default Rate;
