import dispatcher from '../dispatcher/dispatcher';

export const getCurrentAddress = (location) => {

  dispatcher.dispatch({
    type: "ADDRESS_FETCH_STATUS",
    value: "Loading",
    prop: "loadingState",
    });

  const geocoder = new google.maps.Geocoder();

  geocoder.geocode(location, (results, status) => {
    if (status === 'OK') {
      if (results[0]) {
        dispatcher.dispatch({
          type: "GET_ADDRESS",
          value: results[0].formatted_address,
          prop: "address",
        });
        dispatcher.dispatch({
          type: "ADDRESS_FETCH_STATUS",
          value: "Complete",
          prop: "loadingState",
        });
      } else {
          dispatcher.dispatch({
            type: "GET_ADDRESS",
            value: 'No results found.',
            prop: "address",
          });
          dispatcher.dispatch({
            type: "ADDRESS_FETCH_STATUS",
            value: "Complete",
            prop: "loadingState",
            });
          }
    } else if (status === 'ZERO_RESULTS') {
        dispatcher.dispatch({
          type: "GET_ADDRESS",
          value: 'ISS is currently located somewhere above the ocean.',
          prop: "address",
        });
        dispatcher.dispatch({
          type: "ADDRESS_FETCH_STATUS",
          value: "Complete",
          prop: "loadingState",
          });
    } else {
        dispatcher.dispatch({
          type: "ADDRESS_FETCH_STATUS",
          value: "Faild",
          prop: "loadingState",
          });
        }
  });
}

export const setInfo = (state) => {
  dispatcher.dispatch({
    type: "SET_INFO",
    value: state,
    prop: "showInfo",
  });
}

export const resetLoadingState = () => {
  dispatcher.dispatch({
    type: "RESET_LOADING_STATE",
    value: "Undefined",
    prop: "loadingState",
  });
}
