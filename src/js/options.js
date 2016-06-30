const FOCUS_INDICATOR = require('./constant.js');

function getOptionsHTML(options) {
  return `
    <div class="row-multiple">
      <div class="col col-1-2 p-e-4px">
        <label for="color">Color</label>
        <input id="color" type="color"  value="${options.color}" />
      </div>
      <div class="col col-1-2 p-e-4px">
        <label for="width">Width</label>
        <input id="width" type="number"  value="${options.width.replace('px', '')}" min="2" max="8"/>
      </div>
    </div>
    <div class="row-multiple">
      <div class="col col-1-2 p-e-4px">
        <button class="button primary" type="submit" id="update">Update</button>
      </div>
      <div class="col col-1-2 p-s-4px">
        <button class="button secondary" type="submit" id="reset">Reset</button>
      </div>
    </div>
  `;
}

function injectOptionsHTML(options) {
  let color;
  let width;

  function saveOptions(e) {
    e.preventDefault();
    e.stopPropagation();
    chrome.storage.local.set({
      color: color.value,
      width: `${width.value}px`
    }, () => {});
  }

  function resetOptions(e) {
    e.preventDefault();
    e.stopPropagation();
    color.value = FOCUS_INDICATOR.COLOR;
    width.value = FOCUS_INDICATOR.WIDTH.replace('px', '');
    saveOptions(e);
  }

  const optionsForm = document.getElementById('options-form');
  optionsForm.innerHTML = getOptionsHTML(options);
  optionsForm.addEventListener('submit', saveOptions);

  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', resetOptions);

  color = document.getElementById('color');
  width = document.getElementById('width');
}

function renderOptions() {
  chrome.storage.local.get({
    color: FOCUS_INDICATOR.COLOR,
    width: FOCUS_INDICATOR.WIDTH
  }, injectOptionsHTML);
}

document.addEventListener('DOMContentLoaded', renderOptions);
