import _ from 'lodash';
import testImg from './test.png';

function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  const img = document.createElement('img');
  img.src = testImg;
  element.appendChild(img);
  return element;
}

document.body.appendChild(component());