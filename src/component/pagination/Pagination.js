/**
 * Created by pingfengafei on 16/11/29.
 */
import React from 'react';
import './Pagination.less';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    //学到了个碉堡的bind方法
    ['_prev', '_next', '_handleClick', '_hasPrev', '_hasNext'].forEach((val) => {
      this[val] = this[val].bind(this);
    });
  }
  
  static defaultProps = {
    total: 1,
    selectedPage: 1,
    onChange: () => null
  };
  
  static propTypes = {
    total: React.PropTypes.number,
    selectedPage: React.PropTypes.number,
    onChange: React.PropTypes.func
  };
  
  _handleClick(pageNumber) {
    this.props.onChange(pageNumber);
  }
  
  _hasPrev() {
    return this.props.selectedPage > 1;
  }
  
  _hasNext() {
    return this.props.selectedPage < this.props.total;
  }
  
  
  _prev() {
  
    console.log('_prev');
    
    if (this._hasPrev()) {
      this._handleClick(this.props.selectedPage - 1);
    }
  }
  
  _next() {
    
    console.log('_next');
    
    if (this._hasNext()) {
      this._handleClick(this.props.selectedPage + 1);
    }
  }
  
  render() {
    let {total, selectedPage} = this.props;
    
    let pre = null, next = null;
    this._hasPrev() ?
      pre = <li className="pagination-li pagination-li-prev" onClick={this._prev}></li> :
      pre =
        <li className="pagination-li pagination-li-prev pagination-li-prev-disabled" onClick={this._prev}></li>;
    this._hasNext() ?
      next = <li className="pagination-li pagination-li-next" onClick={this._next}></li> :
      next =
        <li className="pagination-li pagination-li-next pagination-li-next-disabled" onClick={this._next}></li>;
    
    let liList = [];
    
    if (total <= 6) {
      for (let i = 1; i <= total; i++) {
        let className = (i === selectedPage ? 'pagination-li selected' : 'pagination-li');
        liList.push(
          <li
            key={`${i}`}
            className={className}
            onClick={this._handleClick.bind(null, i)}
          >{i}</li>
        );
      }
    } else {
      let firstPage = (
        <li
          key="1"
          className={1 === selectedPage ? 'pagination-li selected' : 'pagination-li'}
          onClick={this._handleClick.bind(null, 1)}
        >1</li>
      );
      let lastPage = (
        <li
          key={`${total}`}
          className={total === selectedPage ? 'pagination-li selected' : 'pagination-li'}
          onClick={this._handleClick.bind(null, total)}
        >{total}</li>
      );
      
      let leftPoint = Math.max(1, selectedPage - 2);
      let rightPoint = Math.min(selectedPage + 2, total);
      
      //显示中间5个数据
      for (let i = leftPoint; i <= rightPoint; i++) {
        let className = (i === selectedPage ? 'pagination-li selected' : 'pagination-li');
        liList.push(
          <li
            key={`${i}`}
            className={className}
            onClick={this._handleClick.bind(null, i)}
          >{i}</li>
        );
      }
      //判断是否向左添加。。。
      if (selectedPage - 2 > 2) {
        liList.unshift(<li key="previous-ellipsis" className="pagination-li-prev-ellipsis"></li>);
      }
      //判断是否向右添加。。。
      if (selectedPage + 2 < total - 1) {
        liList.push(<li key="next-ellipsis" className="pagination-li-next-ellipsis"></li>);
      }
      
      //判断是到达最左边情况
      if (selectedPage - 2 >= 2) {
        liList.unshift(firstPage);
      }
      //判断到达最右边情况
      if (selectedPage + 2 <= total - 1) {
        liList.push(lastPage);
      }
    }
    
    let content = (
      <ul>
        {pre}
        {liList}
        {next}
      </ul>
    );
    return (
      <div className="pagination">
        {content}
      </div>
    );
  }
}

export default Pagination;
