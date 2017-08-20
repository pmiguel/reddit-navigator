import BaseStrategy from './BaseStrategy';

export default class NearestStrategy extends BaseStrategy {
    constructor(rootContainer) {
        super(rootContainer);
        console.debug('NearestStrategy::constructor');
    }

    getNext() {
        let childList = this._container.children;
        for (let i = 0; i < childList.length; i++) {
            let child = childList[i];
            // check if the element is after the current scroll position and if it's a valid comment
            if (window.scrollY - child.offsetTop < 0 && BaseStrategy.isComment(child)) {
                return child;
            }
        }
        return null;
    }

    getPrevious() {
        let childList = this._container.children;
        for (let i = childList.length - 1; i >= 0; i--) {
            let child = childList[i];
            // check if the element is after the current scroll position and if it's a valid comment
            if (child.offsetTop - window.scrollY < 0 && BaseStrategy.isComment(child)) {
                return child;
            }
        }
        return null;
    }
}