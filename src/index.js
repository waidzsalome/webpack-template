import _ from 'lodash';
import testImg from './test.png';
import testSvg from './create.svg';
import exampleText from './example.txt';


function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.textContent = exampleText;
  // element.style.background = `url(${testImg})`;
  // const img = document.createElement('img');
  // img.src = testImg;

  // element.appendChild(img);
  const svg = document.createElement('img');
  svg.src = testSvg;
  element.appendChild(svg);
  const logo = new URL('./create.svg', import.meta.url);
  return element;
}

document.body.appendChild(component());