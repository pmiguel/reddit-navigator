/**
 * Checks if an element has a given class
 * @param {String} className
 * @param {HTMLDivElement} element
 * @returns {Boolean} True if the element includes the class
 */
export function hasClass(element, className) {
    return element.className.includes(className);
}

/**
 * Creates a button and injects it on the page
 * @param className Name of class of the button
 * @param title The button title
 */
export function createButton(className, title = null) {
    let button = document.createElement('button');
    button.className += `reddit-navigator__button ${className}`;
    if (title) {
        button.title = title;
    }
    return button;
}