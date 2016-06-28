const FOCUS_INDICATOR = require('./constant');

const optionsForm = document.getElementById('options-form');

function getOptionsHTML(options) {
  return `
    <div class="row">
      <label for="color">Choose your preferred color?</label>
      <input id="color" type="color"  value="${options.color}" />
    </div>
    <div class="row">
      <label for="width">Provide your preferred width?</label>
      <input id="width" type="number"  value="${options.width.replace('px', '')}" min="2" max="8"/>
    </div>
    <div>
      <button class="button" type="submit">Save</button>
    </div>
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
