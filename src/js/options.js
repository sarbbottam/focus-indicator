const optionsForm = document.getElementById('options-form');
const optionsContainer = document.getElementById('options-container');

function getOptionsHTML(options) {
  return `
    <input id="color" type="color"  value="${options.color}" />
  `;
}

function injectOptionsHTML(obj) {
  optionsContainer.innerHTML = getOptionsHTML(obj.focusIndicator);
}

function saveOptions() {
  chrome.storage.local.set({
    focusIndicator: {
      color: document.getElementById('color').value
    }
  }, () => {});
}

function fetchOptions() {
  chrome.storage.local.get({
    focusIndicator: {
      color: '#50e3c2'
    }
  }, injectOptionsHTML);
}

optionsForm.addEventListener('submit', saveOptions);
document.addEventListener('DOMContentLoaded', fetchOptions);
