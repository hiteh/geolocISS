import React from 'react';
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import GeocoderDataStore from '../../stores/geocoderDataStore';
import {getIssPosition} from '../../actions/issStoreActions';
import img from '../../../img/vectorpaint1.svg';
import {config} from '../../config';

class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: this.props.position,
      loadingState: "",
      address: "",
      image: {
        url: img,
        scaledSize: config.googleAPI.MARKER_SIZE,
      },
      showInfo: false,
      pixelOffset: config.googleAPI.INFOWINDOW_PIXELOFFSET,
    }
  }

  handleShowInfo(){
    this.setState({
      showInfo: GeocoderDataStore.getData('showInfo'),
      loadingState: GeocoderDataStore.getData('loadingState'),
      address: GeocoderDataStore.getData('address'),
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      position: nextProps.position,
    })
  }

  componentWillMount() {
    GeocoderDataStore.on("change_geo", this.handleShowInfo.bind(this));
  }

  componentWillUnmount() {
    GeocoderDataStore.removeListener("change_geo", this.handleShowInfo.bind(this));
  }

  render() {
    return(
      <GoogleMap
        defaultZoom={config.googleAPI.ZOOM}
        center={this.state.position}>
        <Marker
          icon={this.state.image}
          defaultAnimation={config.googleAPI.MARKER_ANIMATION}
          title={config.googleAPI.MARKER_TITLE}
          showInfo={this.state.showInfo}
          position={this.state.position}>
          {this.state.showInfo && (
            <InfoWindow
            position={this.state.position}
            options={this.state.pixelOffset}>
            {this.state.loadingState!=="Complete"?
              <div className="main-map-element-container-infowindow"><p>Loading...</p></div>:
              <div className="main-map-element-container-infowindow"><p>{this.state.address}</p></div>}
          </InfoWindow>)}
        </Marker>
      </GoogleMap>
    );
  }
}
export default withScriptjs(withGoogleMap(MapContainer));
