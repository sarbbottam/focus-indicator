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
    <div class="row-multiple">
      <div class="col-1-2 p-e-4px">
        <button class="button primary" type="submit" id="update">Update</button>
      </div>
      <div class="col-1-2 p-s-4px">
        <button class="button secondary" type="submit" id="reset">Reset</button>
      </div>
    </div>
  `;
}

function injectOptionsHTML(options) {
  optionsForm.innerHTML = getOptionsHTML(options);
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', resetOptions);
}

function saveOptions(e) {
  e.preventDefault();
  e.stopPropagation();
  chrome.storage.local.set({
    color: document.getElementById('color').value,
    width: `${document.getElementById('width').value}px`
  }, () => {});
}

function resetOptions(e) {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById('color').value = FOCUS_INDICATOR.COLOR;
  document.getElementById('width').value = FOCUS_INDICATOR.WIDTH.replace('px', '');
  saveOptions(e);
}

function fetchOptions() {
  chrome.storage.local.get({
    color: FOCUS_INDICATOR.COLOR,
    width: FOCUS_INDICATOR.WIDTH
  }, injectOptionsHTML);
}

document.addEventListener('DOMContentLoaded', fetchOptions);
optionsForm.addEventListener('submit', saveOptions);

