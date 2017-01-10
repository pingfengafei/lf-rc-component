/**
 * Created by pingfengafei on 16/12/23.
 */
import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import './Modal.less';

//点击按钮或返回后，需要去除节点
function createChainedFunction() {
  let args = arguments;
  return function () {
    for (let i = 0; i < args.length; i++) {
      args[i].apply(this, arguments); // this 和arguments暂时用不到
    }
  };
}

//创建，设置，添加节点
const node = document.createElement('div');

class Modal extends Component {
  constructor(props) {
    super(props);
    ['destroy'].forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }
  
  //类型校验
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onOk: PropTypes.func,  // 非必须
    onCancel: PropTypes.func,
    okText: PropTypes.string,
    cancelText: PropTypes.string
  };
  
  //默认props
  static defaultProps = {
    title: 'Modal Title',
    content: 'Modal Content',
    onOk: () => {
    },
    onCancel: () => {
    },
    okText: '确认',
    cancelText: '取消'
  };
  
  destroy() {
    ReactDOM.unmountComponentAtNode(node); //移出node内的所有组件
    document.body.removeChild(node); //删除node节点
  }
  
  
  render() {
    let {title, content, onOk, onCancel, okText, cancelText} = this.props;
    const okFunc = createChainedFunction(onOk, this.destroy);
    const cancelFunc = createChainedFunction(onCancel, this.destroy);
    return (
      <div className="lf-ant-modal">
        <div className="lf-ant-modal-header">
          <div className="lf-ant-modal-header-title">{title}</div>
          <div className="lf-ant-modal-header-exit" onClick={cancelFunc}></div>
        </div>
        <div className="lf-ant-modal-content">{content}</div>
        <div className="lf-ant-modal-footer">
          <button onClick={cancelFunc} className="lf-ant-modal-footer-cancel">{cancelText}</button>
          <button onClick={okFunc} className="lf-ant-modal-footer-ok">{okText}</button>
        </div>
      </div>
    );
  }
}

//在export中创建节点&&用ReactDOM.render渲染节点
export default (props = {}) => {
  node.setAttribute('id', 'lf-ant-modal-wrap');
  document.body.appendChild(node);
  
  //渲染组件到节点上
  /**
   * I have no idea about:
   *  Do not depend on the return value from ReactDOM.render
   * */
  // const modalInstance = ReactDOM.render(<Modal {...props}/>, node);
  // return {
  //   component: modalInstance
  // };
  //
  ReactDOM.render(<Modal {...props}/>, node);
};

