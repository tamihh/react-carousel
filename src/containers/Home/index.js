import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp } from 'Redux/actions/app';

class Home extends Component {
  
  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    return (
      <div>
        home
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loadedApp: state.app,
  loadingApp: state.app.loadingApp,
});

const mapDispatchToProps = {
  loadApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);