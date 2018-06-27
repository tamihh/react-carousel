import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp } from 'Redux/actions/app';
import Carousel from 'Components/Carousel';
import Item from 'Components/Item';
import Wrapper from 'Components/Wrapper';


const data = [
  {
    title: 'item1'
  },
  {
    title: 'item2'
  },
  {
    title: 'item3'
  },
  {
    title: 'item4'
  },
  {
    title: 'item5'
  },
  {
    title: 'item6'
  },
  {
    title: 'item7'
  },
  {
    title: 'item8'
  },
  {
    title: 'item9'
  },
  {
    title: 'item10'
  },
  {
    title: 'item11'
  },
  {
    title: 'item12'
  },
]

const carouselSettings = {
  qntItems: data.length || 1,
  itemsPerSlide: {
    desktop: 5,
    tablet: 3,
    smartphone: 1,
  },
}

class Home extends Component {
  
  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    return (
      <Wrapper>
        <Carousel {...carouselSettings}>
          {data.map((item, key) => <Item key={`item${key}`}>item{item.title}</Item>)}
        </Carousel>
      </Wrapper>
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