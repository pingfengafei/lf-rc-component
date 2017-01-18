/**
 * Created by pingfengafei on 17/1/10.
 */

import React, {Component} from 'react';
import Modal from '../component/modal/index';
import Pagination from '../component/pagination/Pagination';
import Rate from '../component/rate/index';
import Button from '../component/button/index';
import Icon from '../component/icon';

class Home extends Component {
  constructor(props) {
    super(props);
    ['handleModalClick', 'handlePaginationChange', 'handleRateChange', 'handleHalfRateChange'].forEach((method) => {
      this[method] = this[method].bind(this);
    });
    
    this.state = {
      modalConfig: {
        title: 'test modal',
        content: 'yes or no ?',
        onOk: () => {
          console.log('ok!');
        },
        onCancel: () => {
          console.log('cancel');
        },
        okText: 'ok',
        cancelText: 'cancel'
      },
      paginationConfig: {
        total: 30,
        selectedPage: 10
      },
      rateConfig: {
        count: 10,
        value: 2,
        onChange: (value) => {
          this.handleRateChange(value);
        }
      },
      halfRateConfig: {
        count: 7,
        value: 4,
        allowHalf: true,
        onChange: (value) => {
          this.handleHalfRateChange(value);
        }
      }
    }
    ;
  }
  
  handleModalClick() {
    Modal.open(this.state.modalConfig);
  }
  
  handlePaginationChange(page) {
    let paginationConfig = Object.assign(this.state.paginationConfig);
    paginationConfig.selectedPage = page;
    this.setState({paginationConfig: paginationConfig}); //可以运行
  }
  
  handleRateChange(value) {
    let rateConfig = Object.assign(this.state.rateConfig);
    rateConfig.value = value;
    this.setState({rateConfig: rateConfig});
  }
  
  handleHalfRateChange(value) {
    let halfRateConfig = Object.assign(this.state.halfRateConfig);
    halfRateConfig.value = value;
    this.setState({halfRateConfig: halfRateConfig});
  }
  
  render() {
    let modal = (<button style={{'margin': '20px 0'}} onClick={this.handleModalClick}>open modal</button>);
    let pagination = (
      <div style={{'margin': '20px 0'}} className="pagination">
        <Pagination
          onChange={this.handlePaginationChange}
          {...this.state.paginationConfig}/>
      </div>
    );
    let rate = (<Rate {...this.state.rateConfig}/>);
    let disableRate = (<Rate {...Object.assign({}, this.state.rateConfig, {value: 2}, {disabled: true})}/>);
    let halfRate = (<Rate {...this.state.halfRateConfig}/>);
    
    return (
      <div className="home-page">
        <div>
          <div>弹出框</div>
          {modal}</div>
        <div>
          <div>分页组件</div>
          {pagination}</div>
        <div>
          <div>打星星</div>
          {rate}
          <div>disable星星</div>
          {disableRate}
          <div>半颗星星</div>
          {halfRate}
        </div>
        <div>
          <div>Icon</div>
          <Icon type="android"/>
          <div>Icon旋转</div>
          <Icon type="loading" spin={true}/>
        </div>
        <div>Icon携带颜色和大小</div>
        <Icon className="icon-big" type="github"></Icon>
        <div>
          <h3>按钮</h3>
          <Button loading={true} icon="hearto">hello world</Button>
        </div>
      </div>
    
    );
  }
}

export default Home;




