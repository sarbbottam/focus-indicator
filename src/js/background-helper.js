const styleUtil = require('./style-util.js');

styleUtil.controlStyle();

const event = new Event('updateShow');
document.dispatchEvent(event);
