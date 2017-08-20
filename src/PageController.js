import { createButton } from "utils/dom";

export default class PageController {
    constructor(strategy) {
        console.debug('PageController::constructor');
        this.currentStrategy = strategy;
        this.controls = {
            nextButton: null,
            prevButton: null,
            container: null,
        }
    }

    init() {
        console.debug('PageController::init');
        this.renderNavigation();
        this.addEventListeners();
    }

    renderNavigation() {
        console.debug('PageController::renderNavigation');
        this.controls.container = document.createElement('div');
        this.controls.container.className += 'reddit-navigator';


        this.controls.nextButton = createButton('next', 'Navigate next.');
        this.controls.prevButton = createButton('prev', 'Navigate previous.');

        // Create buttons
        this.controls.nextButton.innerHTML = '&darr;';
        this.controls.prevButton.innerHTML = '&uarr;';

        // Attach to body
        this.controls.container.appendChild(this.controls.nextButton);
        this.controls.container.appendChild(this.controls.prevButton);

        document.body.appendChild(this.controls.container);
    }

    addEventListeners() {
        console.debug('PageController::addEventListeners');
        this.controls.prevButton.addEventListener('click', (event) => {
            event.preventDefault();
            PageController.scrollToElement(this.currentStrategy.getPrevious());
        });

        this.controls.nextButton.addEventListener('click', (event) => {
            event.preventDefault();
            PageController.scrollToElement(this.currentStrategy.getNext());
        });
    }

    static scrollToElement(element) {
        console.debug('PageController->scrollToElement');
        if( element === null) {
            return;
        }
        if(typeof element !== 'object' || !(element instanceof HTMLDivElement )) {
            throw new TypeError('element is not of type HTMLDivElement');
        }
        const commentId = element.id;
        window.location.href = `#${commentId}`;
    }
}