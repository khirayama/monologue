import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

export default class BaseStore extends EventEmitter {
  constructor() {
    super();
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  }
}
