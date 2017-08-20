import { hasClass } from 'utils/dom';

export default class BaseStrategy {
    constructor(rootComponent) {
        this._container = rootComponent;
    }

    static isComment(element) {
        return hasClass(element, 'comment') && !hasClass(element, 'deleted')
    }
}