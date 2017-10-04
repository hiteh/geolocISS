import React from 'react';
import {getCurrentAddress, setInfo, resetLoadingState} from '../../../actions/geocoderDataStoreActions';

class GetAddress extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAddress: false,
      label: 'Show Address',
    }
  }

  handleShowAddress() {
    if(this.state.showAddress){
      this.timeoutID? clearTimeout(this.timeoutID): false;
      this.setState({
        showAddress: false,
        label: 'Show Address',
      })
      setInfo(false);
      resetLoadingState();
    } else {
      this.setState({
        showAddress: true,
        label: 'Hide Address',
      })
      getCurrentAddress({'location': this.props.position});
      setInfo(true);
      this.timeoutID = setTimeout(()=>{
        this.setState({
          showAddress: false,
          label: 'Show Address',
        })
        setInfo(false);
        resetLoadingState();
      },5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutID);
  }

  render() {
    return <button onClick={this.handleShowAddress.bind(this)}>{this.state.label}</button>
  }
}

export default GetAddress;
