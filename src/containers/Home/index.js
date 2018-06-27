import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp } from 'Redux/actions/app';
import { loadMovies } from 'Redux/actions/movies';
import Carousel from 'Components/Carousel';
import Poster from 'Components/Poster';
import Wrapper from 'Components/Wrapper';

const carouselSettings = {
  itemsPerSlide: {
    desktop: 5,
    tablet: 3,
    smartphone: 1,
  },
  itemsToSlide: 5
}

class Home extends Component {
  
  componentDidMount() {
    this.props.loadApp();
    this.props.loadMovies();
  }
  
  render() {
    const { upcommingMovies } = this.props;

    return (
      <Wrapper>
        <Carousel title="Upcomming Movies" {...carouselSettings}>
          {upcommingMovies.length && upcommingMovies.map((item, key) => <Poster key={`item${key}`} content={item} />)}
        </Carousel>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  loadedApp: state.app,
  loadingApp: state.app.loadingApp,
  upcommingMovies: state.upcommingMovies.movies,
});

const mapDispatchToProps = {
  loadApp,
  loadMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);