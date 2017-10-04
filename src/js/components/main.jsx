import React from 'react';
import Spinner from 'react-spinkit';
import DataTable from './main/datatable.jsx';
import MapContainer from './main/mapContainer.jsx';
import Controls from './main/controls.jsx';
import GetAddress from './main/controls/getAddress.jsx';
import {getIssPosition} from '../actions/issStoreActions';
import IssDataStore from '../stores/issDataStore';
import {config} from '../config';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: IssDataStore.getData("loadingState"),
      initialData: "",
      currentData: "",
      googleApi: config.googleAPI.ENDPOINT + "?v="+config.googleAPI.VERSION +
      (config.googleAPI.KEY?"&key="+config.googleAPI.KEY:""),
      refreshRate: config.app.REFRESH_RATE*1000,
    }
  }

  setLoadingState() {
    if(!this.state.initialData && this.state.loading === "Complete"){
      this.setState({
        initialData: IssDataStore.getData("data"),
      })
    } else {
      this.setState({
        loading: IssDataStore.getData("loadingState"),
        currentData: IssDataStore.getData("data"),
      })
    }
  }

  componentWillMount() {
    IssDataStore.on("change_iss", this.setLoadingState.bind(this));
  }

  componentDidMount() {
    this.intervalId = setInterval(getIssPosition, this.state.refreshRate);
  }

  componentWillUnmount() {
    IssDataStore.removeListener("change_iss", this.setLoadingState.bind(this));
    clearInterval(this.intervalId);
  }
  render() {
    if(this.state.initialData) {
      const issData = this.state.currentData? this.state.currentData:this.state.initialData;
      return(
        <div className="row no-gutter" id="main">
          <div className="col-12 col-sm-9">
              <MapContainer
                googleMapURL={this.state.googleApi}
                loadingElement = {<div className="main-loading-container">
                  <Spinner name="ball-spin-fade-loader" /></div>}
                containerElement={<div className="main-map-container"></div>}
                mapElement={<div className="main-map-element-container"></div>}
                position={{ lat: issData.latitude, lng: issData.longitude }}>
              </MapContainer>
          </div>
          <div className="col-12 col-sm-3">
            <div className="content-container">
              <Controls>
                <GetAddress position={{lat: issData.latitude, lng: issData.longitude}}/>
              </Controls>
              <div className="content-container-datatable">
                <DataTable issDataTable={issData}/>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div className="main-loading-container">
          <Spinner name="ball-spin-fade-loader" ></Spinner>
        </div>
      );
    }
  }
}

export default Main;
