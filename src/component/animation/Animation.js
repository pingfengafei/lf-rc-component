/**
 * Created by pingfengafei on 3/21/17.
 */
import  React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './Animation.less';

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }
  
  add() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }
  
  remove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  
  render() {
    /**
     *一定要提供key
     */
    const items = this.state.items.map((item, index) => {
      return (
        <div key={item} onClick={this.remove.bind(this, index)}>
          {item}
        </div>
      );
    });
    
    return (
      <div className="animation">
        <div onClick={this.add}>add item</div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Animation;