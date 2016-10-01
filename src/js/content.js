const styleUtil = require('./style-util.js');
const showUtil = require('./show-util.js');

styleUtil.controlStyle();

window.addEventListener('focus', styleUtil.controlStyle);
window.addEventListener('focus', showUtil.updateShow);

document.addEventListener('focus', showUtil.controlShow, true);
