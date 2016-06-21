chrome.browserAction.onClicked.addListener(() => {
  chrome.storage.local.get('focusIndicatorEnabled', obj => {
    const focusIndicatorEnabled = !obj.focusIndicatorEnabled;
    let iconPath = '';

    if (focusIndicatorEnabled) {
      iconPath = 'icons/enabled/48.png';
    } else {
      iconPath = 'icons/disabled/48.png';
    }

    chrome.browserAction.setIcon({path: iconPath});

    chrome.storage.local.set({focusIndicatorEnabled}, () => {
      chrome.tabs.executeScript(null, {file: 'js/main.js'});
    });
  });
});
