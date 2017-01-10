/**
 * Created by pingfengafei on 17/1/10.
 */
import ModalComponent from './Modal';

function init(options) {
  return ModalComponent(options);
}

let Modal = {
  open(options){
    return init(options);
  }
};


//这样层层包裹，正的好吗？
export default Modal;
