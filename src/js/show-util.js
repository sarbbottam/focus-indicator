const isInvisible = require('is-invisible');
const FOCUS_INDICATOR = require('./constant.js');

const div = document.createElement('div');
div.style.position = 'absolute';
div.style.top = '0px';
div.style.right = '0px';
div.style.zIndex = 1000;
div.style.background = '#fff';
div.style.padding = '10px';
div.style.border = '10px solid red';
div.style.display = 'none';
div.innerHTML = 'Invisible element is focused, check console for details.';
document.body.appendChild(div);

let show = FOCUS_INDICATOR.SHOW;
let timer;

function updateShow() {
  chrome.storage.local.get({
    enabled: FOCUS_INDICATOR.ENABLED,
    show: FOCUS_INDICATOR.SHOW
  }, options => {
    show = options.enabled && options.show;
  });
}

document.addEventListener('updateShow', updateShow, false);

function controlShow(e) {
  if (show) {
    if (isInvisible(e.target)) {
      clearTimeout(timer);
      console.log(e.target);
      div.style.display = 'block';
    }
    timer = setTimeout(() => {
      div.style.display = 'none';
    }, 1000);
  }
}

module.exports = {
  updateShow,
  controlShow
};
