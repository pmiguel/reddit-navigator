import { hasClass } from 'utils/dom';

export default class BaseStrategy {
    constructor(rootComponent) {
        this._container = rootComponent;
        this.childElements = rootComponent.children;
    }

    static isComment(element) {
        return hasClass(element, 'comment') && !hasClass(element, 'deleted')
    }
}