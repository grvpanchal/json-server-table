import React from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';

export default function ShipmentTableSearch({ shipments }) {
  const [state] = React.useState({
    columns: [
      { title: 'ID', field: 'id' },
      { title: 'Name', field: 'name' },
      { title: 'Mode', field: 'mode' },
      { title: 'Type', field: 'type' },
      { title: 'Total', field: 'total' },
    ],
  });

  return (
    <MaterialTable
      title="Shipments Table"
      columns={state.columns}
      data={shipments}
    />
  );
}

ShipmentTableSearch.propTypes = {
  shipments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      mode: PropTypes.string,
      total: PropTypes.string,
    }),
  ).isRequired,
};
