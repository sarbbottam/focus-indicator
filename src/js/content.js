const styleUtil = require('./style-util.js');

styleUtil.controlStyle();

window.addEventListener('focus', styleUtil.controlStyle);
