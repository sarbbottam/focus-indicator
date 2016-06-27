const optionsForm = document.getElementById('options-form');

function getOptionsHTML(options) {
  return `
    <input id="color" type="color"  value="${options.color}" />
    <button type="submit">Save</button>
  `;
}

function injectOptionsHTML(options) {
  optionsForm.innerHTML = getOptionsHTML(options);
}

function saveOptions() {
  chrome.storage.local.set({
    color: document.getElementById('color').value
  }, () => {});
}

function fetchOptions() {
  chrome.storage.local.get({
    color: '#50e3c2'
  }, injectOptionsHTML);
}

document.addEventListener('DOMContentLoaded', fetchOptions);
optionsForm.addEventListener('submit', saveOptions);
