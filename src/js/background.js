const FOCUS_INDICATOR = require('./constant');

chrome.browserAction.onClicked.addListener(() => {
  chrome.storage.local.get({
    enabled: true
  }, options => {
    const enabled = !options.enabled;
    let iconPath = '';

    if (enabled) {
      iconPath = 'icons/enabled/48.png';
    } else {
      iconPath = 'icons/disabled/48.png';
    }

    chrome.browserAction.setIcon({path: iconPath});

    chrome.storage.local.set({
      enabled
    }, () => {
      chrome.tabs.executeScript(null, {file: 'js/main.js'});
    });
  });
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    enabled: FOCUS_INDICATOR.ENABLED,
    color: FOCUS_INDICATOR.COLOR,
    width: FOCUS_INDICATOR.WIDTH
  }, () => {});
});
