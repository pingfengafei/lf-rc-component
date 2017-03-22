/**
 * Created by pingfengafei on 17/1/10.
 */

import React, {Component} from 'react';
import Modal from '../component/modal/index';
import Pagination from '../component/pagination/Pagination';
import Rate from '../component/rate/index';
import Button from '../component/button/index';
import Icon from '../component/icon';
import Carousel from '../component/carousel';
import Animation from '../component/animation/Animation';
import Navigation from '../component/Navigation/';

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
      <div className="home-page" style={{padding: '0 20px'}}>
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
          <h3>按钮 : </h3>
          <Button style={{'marginRight': '10px'}} loading={false} type="primary" icon="github">primary</Button>
          <Button style={{'marginRight': '10px'}} loading={false}>default</Button>
          <Button style={{'marginRight': '10px'}} loading={false} type="ghost" icon="github">ghost</Button>
          <Button style={{'marginRight': '10px'}} loading={true} type="dash" icon="github">dashed</Button>
          <Button style={{'marginRight': '10px'}} type="dash" icon="github" disabled>diaabled</Button>
          <Button style={{'marginRight': '10px'}} icon="github" shape="circle"></Button>
          <Button style={{'marginRight': '10px'}} icon="github" size="large">large</Button>
          <Button style={{'marginRight': '10px'}} icon="github" size="small">small</Button>
        </div>
        <div>
          <h3>carousel : 旋转木马 ： 卡在动画这里了，不学，不会，不练</h3>
          <h4>一开始，想写个函数，击按钮触发动画，但是上一次动画没有渲染完成，再次点击就会cs位置错乱</h4>
          <h4>有一天骑车等红绿灯想，突然想到debounce和throttle可以解决。但是感觉不够完美，不能解决快速移动需求，没有深究</h4>
          <h4>今天看大神代码，想法和上一条不谋而合，分不清是高兴还是悲哀</h4>
          <Carousel>
            <div style={{'width': '480px', 'height': '270px', 'background': 'pink'}}>1</div>
            <div style={{'width': '480px', 'height': '270px', 'background': 'yellow'}}>2</div>
            <div style={{'width': '480px', 'height': '270px', 'background': 'green'}}>3</div>
            <div style={{'width': '480px', 'height': '270px', 'background': 'blue'}}>4</div>
          </Carousel>
        </div>
        <div>
          <h3>导航栏</h3>
          <Navigation />
        </div>
      </div>
    );
  }
}

export default Home;




