<<<<<<< HEAD
// eslint-disable-next-line import/no-extraneous-dependencies
import { JSDOM } from 'jsdom';
import countComments from './mentCounter.js'; // Make sure the path to your countComments file is correct

describe('countComments', () => {
  let originalDocument;

  beforeAll(() => {
    // Store the original document to restore later
    originalDocument = global.document;

    // Create a mock DOM structure for testing using jsdom
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document = dom.window.document;
  });

  afterAll(() => {
    // Restore the original document after tests
    global.document = originalDocument;
  });

  test('updates comment count correctly', () => {
    // Add some mock comment items to the DOM
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
=======
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
>>>>>>> de09f303d07f76760798466e2ea3358ebded167c
});