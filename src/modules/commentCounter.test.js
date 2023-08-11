import { JSDOM } from 'jsdom';
import countComments from './mentCounter.js';

describe('countComments', () => {
  let originalDocument;

  beforeAll(() => {
    originalDocument = global.document;
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document = dom.window.document;
  });

  afterAll(() => {
    global.document = originalDocument;
  });

  test('updates comment count correctly', () => {
    const commentItem1 = document.createElement('div');
    commentItem1.classList.add('comment-item');
    const commentItem2 = document.createElement('div');
    commentItem2.classList.add('comment-item');
    const commentItem3 = document.createElement('div');
    commentItem3.classList.add('comment-item');

    document.body.appendChild(commentItem1);
    document.body.appendChild(commentItem2);
    document.body.appendChild(commentItem3);

    // Mock the comment-count element
    const commentCountElement = document.createElement('p');
    commentCountElement.classList.add('comment-count');
    document.body.appendChild(commentCountElement);

    // Call the countComments function
    countComments();

    // Assert that the comment count was updated
    expect(commentCountElement.textContent).toBe('Total Comments: 3');
  });
});