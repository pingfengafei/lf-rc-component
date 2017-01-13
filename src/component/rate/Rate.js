/**
 * Created by pingfengafei on 17/1/12.
 */
import React, {Component, PropTypes} from 'react';
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
    ['handleClick', 'handleMouseMove', 'handleMouseLeave', 'getStarValue'].forEach((method) => {
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
  
  handleMouseLeave() {
    this.setState({value: this.props.value});
  }
  
  getStarValue(index, x) {
    let starNode = this.refs[`ref-rate-star-${index}`];
    let left = getOffsetLeft(starNode);
    let starNodeWidth = parseInt(window.getComputedStyle(this.refs[`ref-rate-star-${index}`]).width);
    
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
    //let {count, defaultValue, disabled, selectColor, onChange, allowHalf} = this.props;
    let {count} = this.props;
    let starList = [];
    for (let i = 0; i < count; i++) {
      let className = classNames(
        'anticon icon-star',
        {selected: i < Math.floor(this.state.value)},
        {cursor: this.props.disabled ? false : true},
      );
      
      let classNameWithHalfStarContainer = classNames(className, 'half-star-container');
      let classNameWithHalfStarContent = classNames(className,
        'half-star-content',
        {'half-star-content-active': (i === Math.floor(this.state.value) && this.state.value % 1) ? true : false}
      );
      
      //li不能包含li
      starList.push(<li key={`rate-star-list-${i}`}
                        ref={`ref-rate-star-${i}`}
                        onClick={this.handleClick.bind(this, i)}
                        onMouseMove={this.handleMouseMove.bind(this, i)}
                        className={classNameWithHalfStarContainer}
        >
          <div key={`rate-star-list-${i}`}
               onClick={this.handleClick.bind(this, i)}
               onMouseMove={this.handleMouseMove.bind(this, i)}
               className={classNameWithHalfStarContent}
          />
        </li>
      );
    }
    
    return (
      <div className="rate-component-container">
        <ul onMouseLeave={this.handleMouseLeave}>{starList}</ul>
      </div>
    );
  }
}

/**
 * 改进：
 * 1：用onMouseMove替代onMouseOver done
 * 2：onMouseOut写在ul节点上，而不是每个li节点上，有助于更好的用户体验 done
 * 3：拆分一个star组件，每个组件内含有method，减少bind的使用 这里不需要
 * 4: 鼠标hover到星星的间隙，动画效果优化 done
 */

export default Rate;
