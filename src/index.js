const { file, parse } = require('./global');
function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  this.alert('Hmmm, this probably isn\'t a great idea...');
  console.log('file', file);
  console.log('parse', parse);
  return element;
}

document.body.appendChild(component());

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => {
    console.log("We retrieved some data! AND we're confident it will work on a variety of browser distributions.");
    console.log(json);
  })
  .catch((error) =>
    console.error('Something went wrong when fetching this data: ', error)
  );