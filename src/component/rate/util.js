/**
 * Created by pingfengafei on 17/1/13.
 */
/**
 *看不懂奥义
 */

//返回x轴或y轴方向上的滚动距离， 默认x轴
function getScroll(w, top) {
  let ret = top ? w.pageYOffset : w.pageXOffset;
  const method = top ? 'scrollTop' : 'scrollLeft';
  if (typeof ret !== 'number') {
    const d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getClientPosition(elem) {
  const doc = elem.ownerDocument;  //返回最顶层的document树
  const docElem = doc && doc.documentElement;  //返回document的html树
  let box = elem.getBoundingClientRect(); //距离视窗的Reat
  let x = box.left;
  let y = box.top;
  
  //这里很严谨，但是不知道干什么
  x -= docElem.clientLeft || doc.body.clientLeft || 0;
  y -= docElem.clientTop || doc.body.clientTop || 0;
  
  return {
    left: x,
    top: y
  }
  
}

export function getOffsetLeft(elem) {
  const position = getClientPosition(elem);
  const doc = elem.ownerDocument;
  let window = doc.defaultView || doc.parentWindow;
  
  position.left += getScroll(window);
  return position.left; // 返回距离视窗的左边距
}