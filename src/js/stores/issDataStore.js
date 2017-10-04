import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/dispatcher';

class IssDataStore extends EventEmitter {
  constructor() {
    super()
    this.data = {}
    this.loadingState = 'Undefined';
  }

  handleActions(action) {
    switch (action.type) {
      case "GET_ISS_POSITION":
        this.setData(action.value, action.prop);
        break;
      case "ISS_DATA_FETCH_STATUS":
        this.setData(action.value, action.prop);
        break;
    }
  }

  setData(value, prop) {
    this[prop] = value;
    this.emit("change_iss");
  }

  getData(prop) {
    return this[prop];
  }
}

const issDataStore = new IssDataStore();
dispatcher.register(issDataStore.handleActions.bind(issDataStore));
export default issDataStore;
