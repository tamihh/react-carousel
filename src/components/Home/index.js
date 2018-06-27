import React from 'react';
import PropTypes from 'prop-types';
import { loadApp } from '';

const Home = props => {
  return (
    <div>
      home
    </div>
  );
};

const mapStateToProps = state => ({
  loadedApp: state.app,
  loadingApp: state.app.loadingApp,
});

const mapDispatchToProps = {
  loadApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);