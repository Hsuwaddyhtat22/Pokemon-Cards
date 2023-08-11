// Import the function to be tested
// eslint-disable-next-line import/no-extraneous-dependencies
import { JSDOM } from 'jsdom';
import countItems from './itemscounter.js';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.document = window.document;
global.HTMLElement = window.HTMLElement; // Mock HTMLElement for textContent

// Mock the DOM elements and methods for testing
document.body.innerHTML = `
  <div id="itemCounter"></div>
  <div class="item"></div>
  <div class="item"></div>
`;

// Mock the textContent property
Object.defineProperty(HTMLElement.prototype, 'textContent', {
  configurable: true,
  get() {
    // eslint-disable-next-line no-underscore-dangle
    return this._textContent || '';
  },
  set(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._textContent = value;
  },
});

// Mock the querySelectorAll method
document.querySelectorAll = jest.fn(() => document.getElementsByClassName('item'));

// Test the countItems function
test('countItems function updates item count correctly', () => {
  countItems();

  const itemCounter = document.getElementById('itemCounter');
  const itemCount = document.getElementsByClassName('item').length;

  expect(itemCounter.textContent).toBe(`Total Cards: ${itemCount}`);
});
