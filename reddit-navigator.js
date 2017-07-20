console.debug('REDDIT-NAVIGATOR-INIT');

const REDDIT_COMMENT_CONTAINER = document.getElementsByClassName('sitetable nestedlisting')[0];
let currentComment = null;

/**
 * Creates a button and injects it on the page
 * @param action The action the button executes
 * @param className Name of class of the button
 * @param title The button title
 */
function createButton(action, className, title = null) {
    let button = document.createElement('button');
    button.className += `reddit-navigator__button ${className}`;
    button.addEventListener('click', (event) => {
        event.preventDefault();
        action();
    });
    if (title) {
        button.title = title;
    }
    return button;
}

let redditNavigatorContainer = document.createElement('div');
redditNavigatorContainer.className += 'reddit-navigator';

// Create buttons
let nextButton = createButton(next, 'next', 'Navigate to next main comment.');
let prevButton = createButton(prev, 'prev', 'Navigate to previous main comment.');

// Attach to body
redditNavigatorContainer.appendChild(nextButton);
redditNavigatorContainer.appendChild(prevButton);
document.body.appendChild(redditNavigatorContainer);

/**
 * Navigates to the next main comment
 */
function next() {
    if (!currentComment) {
        currentComment = REDDIT_COMMENT_CONTAINER.firstElementChild;
    } else {
        let next = currentComment.nextElementSibling;
        if (next !== null) {
            currentComment = next;
        }
    }

    while(!currentComment.className.includes('comment')) {
        currentComment = currentComment.nextElementSibling;
    }
    scrollTo(currentComment);
}

/**
 * Navigates to the previous comment
 */
function prev() {
    if (currentComment) {
        let prev = currentComment.previousElementSibling;
        if(prev !== null) {
            currentComment = prev;
        }

        while(!currentComment.className.includes('comment')) {
            currentComment = currentComment.previousElementSibling;
        }
    }
    scrollTo(currentComment);
}

/**
 * Scrolls the page to a target location.
 */
function scrollTo(targetComment) {
    if(typeof targetComment !== 'object' || !(targetComment instanceof HTMLDivElement )) {
        throw new TypeError('targetComment is not of type HTMLDivElement');
    }
    const commentId = targetComment.id;
    window.location.href = `#${commentId}`;
}

