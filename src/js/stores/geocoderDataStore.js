import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/dispatcher';

class GeocoderDataStore extends EventEmitter {
  constructor() {
    super()
    this.address = "";
    this.loadingState = "Undefined";
    this.showInfo = false;
  }

  setData(value, prop) {
    this[prop] = value;
    this.emit("change_geo");
  }

  getData(prop) {
    return this[prop];
  }

  handleActions(action) {
    switch (action.type) {
      case "GET_ADDRESS":
        this.setData(action.value, action.prop);
        break;
      case "ADDRESS_FETCH_STATUS":
        this.setData(action.value, action.prop);
        break;
      case "SET_INFO":
        this.setData(action.value, action.prop);
        break;
      case "RESET_LOADING_STATE":
        this.setData(action.value, action.prop);
        break;
    }
  }
}

const geocoderDataStore = new GeocoderDataStore();
dispatcher.register(geocoderDataStore.handleActions.bind(geocoderDataStore));
export default geocoderDataStore;
