/**
 * Created by pingfengafei on 17/1/10.
 */
import React, {Component} from 'react';
import Modal from '../component/modal/index';
import Pagination from '../component/pagination/Pagination';

class Home extends Component {
  constructor(props) {
    super(props);
    ['handleModalClick', 'handlePaginationChange'].forEach((method) => {
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
      }
    };
  }
  
  handleModalClick() {
    Modal.open(this.state.modalConfig);
  }
  
  handlePaginationChange(page) {
    let paginationConfig = Object.assign(this.state.paginationConfig);
    paginationConfig.selectedPage = page;
    this.setState({paginationConfig: paginationConfig}); //可以运行
    // this.setState({paginationConfig.selectedPage : page}); //bug
  }
  
  render() {
    
    let pagination = (
      <div style={{'margin': '20px 0'}} className="pagination">
        <Pagination
          onChange={this.handlePaginationChange}
          {...this.state.paginationConfig}/>
      </div>
    );
    
    return (
      <div className="home-page">
        <button style={{'margin': '20px 0'}} onClick={this.handleModalClick}>open modal</button>
        {pagination}
      </div>
    );
  }
}

export default Home;




