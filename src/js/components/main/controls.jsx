import React from 'react';

class Controls extends React.Component {
  render(){
    return(
      <div className="content-container-controls">
        {this.props.children}
      </div>
    )
  }
}

export default Controls;
