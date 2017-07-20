const REDDIT_COMMENT_CONTAINER = document.getElementsByClassName('sitetable nestedlisting');
let currentComment = null;

if (REDDIT_COMMENT_CONTAINER.length === 0) {
    throw new TypeError('Current page does not include any comment section');
}

/**
 * Creates a button and injects it on the page
 * @param action The action the button executes
 * @param appendTo The target container. Default is document.body
 */
function createButton(action, appendTo = document.body) {
    let button = document.createElement('button');
    button.className += 'reddit_navigator-button';

    button.addEventListener('click', (event) => {
        event.preventDefault();
        action();
    });

    appendTo.appendChild(button);
}

/**
 * Navigates to the next main comment
 */
function next() {
    if (!currentComment) {
        currentComment = REDDIT_COMMENT_CONTAINER.firstElementChild;
    }
    currentComment = currentComment.nextNode();
    while(!currentComment.className.includes('comment')) {
        currentComment = currentComment.nextNode();
    }
    scrollTo(currentComment);
}

/**
 * Navigates to the previous comment
 */
function prev() {
    if (currentComment) {
        currentComment = currentComment.previousNode();
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

