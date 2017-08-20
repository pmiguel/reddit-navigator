import { createButton } from "utils/dom";
import SequentialStrategy from "strategies/SequentialStragegy";

console.debug('REDDIT-NAVIGATOR-INIT');

const COMMENT_CONTAINER = document.getElementsByClassName('sitetable nestedlisting')[0];

let controlContainer = document.createElement('div');
controlContainer.className += 'reddit-navigator';


let nextButton = createButton('next', 'Navigate to nextComment main comment.');
let prevButton = createButton('prev', 'Navigate to previous main comment.');

// Create buttons
nextButton.appendChild(document.createTextNode('v'));
prevButton.appendChild(document.createTextNode('^'));

// Attach to body
controlContainer.appendChild(nextButton);
controlContainer.appendChild(prevButton);
document.body.appendChild(controlContainer);

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

const NavigationalStrategy = new SequentialStrategy(COMMENT_CONTAINER);

nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    scrollTo(NavigationalStrategy.getNext());
});

prevButton.addEventListener('click', (event) => {
    event.preventDefault();
    scrollTo(NavigationalStrategy.getPrevious());
});
