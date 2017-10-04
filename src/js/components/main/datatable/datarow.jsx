import React from 'react';
class DataRow extends React.Component {
  render() {
    return (
      <div className="content-container-datatable-data-row">
        <span className="content-container-datatable-data-row-key">{this.props.name}&#58; </span>
        <span className="content-container-datatable-data-row-value">{this.props.value}</span>
      </div>
    )
  }
}

export default DataRow;
