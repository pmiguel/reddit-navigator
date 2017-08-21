import BaseStrategy from './BaseStrategy';

/**
 * Comment navigation strategy that retrieves the next or previous comment based on the current page scroll position.
 */
export default class NearestStrategy extends BaseStrategy {
    /**
     * Constructor function. Creates a NearestStrategy Object
     * @param {HTMLElement} rootContainer - The container wrapping the comment list.
     */
    constructor(rootContainer) {
        super(rootContainer);
        this.name = 'Nearest Parent';
        console.debug('NearestStrategy::constructor');
    }

    /**
     * Returns the next comment based on the current document scrollY position.
     * @returns {(HTMLElement|null)} - Returns the next possible comment or null if none found
     */
    getNext() {
        // Iterate through the list of child elements in the container.
        for (let index = 0; index < this.childElements.length; index++) {
            const child = this.childElements[index];
            // If the element offsetTop value is higher than the current window scrollY position,
            // check if element is a valid comment node and return it immediately.
            // If not, continue iterating.
            if (window.scrollY < child.offsetTop && BaseStrategy.isComment(child)) {
                return child;
            }
        }
        return null;
    }

    /**
     * Returns the previous comment based on the current document scrollY position.
     * @returns {(HTMLElement|null)} - Returns the previous possible comment or null if none found
     */
    getPrevious() {
        // Iterate through the list of child elements in the container in reverse.
        for (let index = this.childElements.length - 1; index >= 0; index--) {
            const child = this.childElements[index];
            // If the element offsetTop value is lower than the current window scrollY position,
            // check if element is a valid comment node and return it immediately.
            // If not, continue iterating.
            if (window.scrollY > child.offsetTop && BaseStrategy.isComment(child)) {
                return child;
            }
        }
        return null;
    }

    /**
     * String representation of the current strategy
     * @returns {string} - The name of the strategy
     */
    toString() {
        return this.name;
    }
}