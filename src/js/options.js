const FOCUS_INDICATOR = require('./constant');

const optionsForm = document.getElementById('options-form');

function getOptionsHTML(options) {
  return `
    <input id="color" type="color"  value="${options.color}" />
    <input id="width" type="number"  value="${options.width.replace('px', '')}" min="2" max="8"/>
    <button type="submit">Save</button>
  `;
}

function injectOptionsHTML(options) {
  optionsForm.innerHTML = getOptionsHTML(options);
}

function saveOptions() {
  chrome.storage.local.set({
    color: document.getElementById('color').value,
    width: `${document.getElementById('width').value}px`
  }, () => {});
}

function fetchOptions() {
  chrome.storage.local.get({
    color: FOCUS_INDICATOR.COLOR,
    width: FOCUS_INDICATOR.WIDTH
  }, injectOptionsHTML);
}

document.addEventListener('DOMContentLoaded', fetchOptions);
optionsForm.addEventListener('submit', saveOptions);
