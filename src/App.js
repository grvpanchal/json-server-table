import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import withStyles from '@material-ui/core/styles/withStyles';

import Header from './components/Header';
import ShipmentsContainer from './containers/ShipmentsContainer';

const styles = () => ({
  maxContainerWidth: {
    maxWidth: '720px',
  },
});
class App extends Component {
  render() {
    const { header, classes } = this.props;
    return (
      <Container className={classes.maxContainerWidth}>
        <Header title={header.title} />
        <ShipmentsContainer />
      </Container>
    );
  }
}

App.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  header: PropTypes.shape({
    title: PropTypes.string,
  }),
};

App.defaultProps = {
  header: {
    title: 'Site Title',
  },
};

const mapStateToProps = ({ header }) => ({
  header,
});

export default connect(mapStateToProps)(withStyles(styles)(App));
