import strategies from "strategies";
import PageController from "./PageController";

console.debug('REDDIT-NAVIGATOR-INIT');

const commentContainer = document.getElementsByClassName('sitetable nestedlisting')[0];

/**
 * Scrolls the page to a target location.
 */

const strategy = strategies.factory('NEAREST', commentContainer);

const navigationControl = new PageController(strategy, commentContainer);
navigationControl.init();