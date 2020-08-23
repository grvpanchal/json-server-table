import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';

import ShipmentTableSearch from '../components/ShipmentTableSearch';
import DynamicViewWrapper from '../components/DynamicViewWrapper';

import * as shipmentInfoAction from '../actions/shipmentInfoAction';

const styles = () => ({
  spacer: {
    margin: '3rem auto',
  },
});
class ShipmentsContainer extends Component {
  componentDidMount() {
    const { getShipments } = this.props;
    getShipments();
  }

  render() {
    const {
      shipmentInfo,
      classes,
    } = this.props;
    return (
      <main className={classes.spacer}>
        <DynamicViewWrapper
          isLoading={shipmentInfo.isLoading}
          loader={(<CircularProgress />)}
          error={shipmentInfo.error}
        >
          <ShipmentTableSearch shipments={shipmentInfo.shipments} />
        </DynamicViewWrapper>
      </main>
    );
  }
}

ShipmentsContainer.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  getShipments: PropTypes.func.isRequired,
  shipmentInfo: PropTypes.shape({
    shipments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        mode: PropTypes.string,
        total: PropTypes.string,
      }),
    ),
    error: PropTypes.string,
    isLoading: PropTypes.bool,
  }),
};

ShipmentsContainer.defaultProps = {
  shipmentInfo: {
    isLoading: false,
    shipments: [],
    error: '',
  },
};

const mapStateToProps = ({ shipmentInfo }) => ({
  shipmentInfo,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getShipments: shipmentInfoAction.getShipments,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ShipmentsContainer));
