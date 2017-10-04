import dispatcher from '../dispatcher/dispatcher';
import {config} from '../config';

export const getIssPosition = () => {
  const apiData = config.wheretheissatAPI.ENDPOINT+
                "v"+config.wheretheissatAPI.VERSION+
                "/satellites/"+config.wheretheissatAPI.SATELLITE_NORAD_ID;
  dispatcher.dispatch({
    type: "ISS_DATA_FETCH_STATUS",
    value: "Loading",
    prop: "loadingState",
  });

  return fetch(apiData)
  .then( r => {
    if(r.ok) {
      return r.json();
    } else {
      dispatcher.dispatch({
        type: "ISS_DATA_FETCH_STATUS",
        value: "Faild",
        prop: "loadingState",
      });
      throw new Error("wheretheiss.atAPI - API ERROR");
    }
  })
  .then( data => {
    dispatcher.dispatch({
      type: "GET_ISS_POSITION",
      value: data,
      prop: "data",
    });
    dispatcher.dispatch({
      type: "ISS_DATA_FETCH_STATUS",
      value: "Complete",
      prop: "loadingState",
    });
  })

}
