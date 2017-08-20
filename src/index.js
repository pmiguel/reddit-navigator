import strategies from "strategies";
import PageController from "./PageController";

console.debug('::Reddit Navigator');
if (ENV.development) { console.warn('Running development build of Reddit navigator'); }

const commentContainer = document.getElementsByClassName('sitetable nestedlisting')[0];
const strategy = strategies.factory('NEAREST', commentContainer);
const navigationControl = new PageController(strategy, commentContainer);
navigationControl.init();