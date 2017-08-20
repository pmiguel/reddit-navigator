import { hasClass } from 'utils/dom';

export default class SequentialStrategy {
    constructor(rootContainer) {
        this._container = rootContainer;
        this._currentComment = null;
    }

    getNext() {
        if (!this._currentComment) {
            this._currentComment = this._container.firstElementChild;
        } else {
            let next = this._currentComment.nextElementSibling;
            if (next !== null) {
                this._currentComment = next;
            }
        }

        // Float clearing elements appear in between main comments. This allows us to bypass them
        while(!hasClass(this._currentComment, 'comment') || hasClass(this._currentComment, 'deleted')) {
            this._currentComment = this._currentComment.nextElementSibling;
        }
        return this._currentComment;
    }

    getPrevious() {
        if (this._currentComment) {
            let prev = this._currentComment.previousElementSibling;
            if(prev !== null) {
                this._currentComment = prev;
            }

            // Float clearing elements appear in between main comments. This allows us to bypass them
            while(!hasClass(this._currentComment, 'comment') || hasClass(this._currentComment, 'deleted')) {
                this._currentComment = this._currentComment.previousElementSibling;
            }
        }
        return this._currentComment;
    }
}