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
let nextButton = createButton(nextComment, 'next', 'Navigate to nextComment main comment.');
let prevButton = createButton(previousComment, 'prev', 'Navigate to previous main comment.');

// Attach to body
redditNavigatorContainer.appendChild(nextButton);
redditNavigatorContainer.appendChild(prevButton);
document.body.appendChild(redditNavigatorContainer);

/**
 * Navigates to the nextComment main comment
 */
function nextComment() {
    if (!currentComment) {
        currentComment = REDDIT_COMMENT_CONTAINER.firstElementChild;
    } else {
        let next = currentComment.nextElementSibling;
        if (next !== null) {
            currentComment = next;
        }
    }

    // Float clearing elements appear in between main comments. This allows us to bypass them
    while(!currentComment.className.includes('comment')) {
        currentComment = currentComment.nextElementSibling;
    }

    scrollTo(currentComment);
}

/**
 * Navigates to the previous comment
 */
function previousComment() {
    if (currentComment) {
        let prev = currentComment.previousElementSibling;
        if(prev !== null) {
            currentComment = prev;
        }

        // Float clearing elements appear in between main comments. This allows us to bypass them
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
    if( targetComment === null) {
        return;
    }
    if(typeof targetComment !== 'object' || !(targetComment instanceof HTMLDivElement )) {
        throw new TypeError('targetComment is not of type HTMLDivElement');
    }
    const commentId = targetComment.id;
    window.location.href = `#${commentId}`;
}

