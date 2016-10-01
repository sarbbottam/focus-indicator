const isInvisible = require('is-invisible');
const FOCUS_INDICATOR = require('./constant.js');

let show = FOCUS_INDICATOR.SHOW;

function updateShow() {
  console.log('up');
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
      console.log(e.target.outerHTML);
    }
  }
}

module.exports = {
  updateShow,
  controlShow
};
