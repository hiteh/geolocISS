import React from 'react';
import DataRow from './datatable/datarow.jsx';

class DataTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.prepareData(this.props.issDataTable),
    }
  }

  prepareData(data) {
  let {latitude,longitude,altitude,velocity,visibility,timestamp} = {...data};
  return([
    <DataRow key="latitude" name="Latitude" value={latitude}/>,
    <DataRow key="longitude" name="Longitude" value={longitude}/>,
    <DataRow key="altitude" name="Altitude" value={`${altitude.toFixed(2)} km`}/>,
    <DataRow key="velocity" name="Velocity" value={`${velocity.toFixed(2)} km/h`}/>,
    <DataRow key="visibility" name="Visibility" value={visibility}/>,
    <DataRow key="timestamp" name="Time" value={this.convertTimestamp(timestamp)}/>
    ])
  }

  convertTimestamp(timestamp){
    const date = new Date(timestamp*1000);
    const timezoneOffset = (date.getTimezoneOffset()/60)*-1;
    let timezone = ' UTC';
    if(timezoneOffset>0) {
      timezone+=' + '+timezoneOffset;
    } else if(timezoneOffset<0) {
      timezone+=' - '+Math.abs(timezoneOffset);
    }
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + timezone;
    return formattedTime;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: this.prepareData(nextProps.issDataTable),
    })
  }

  render() {
    return(
      <div>{this.state.data}</div>
    );
  }
}

export default DataTable;
