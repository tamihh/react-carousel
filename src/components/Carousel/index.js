import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Content, Items, Item, NextButton, PrevButton } from './styles';

class Carousel extends Component {

  state = {
    position: 0,
    sliding: false,
    itemWidth: 20,
    windowWidth: window.innerWidth,
  };

  doSliding() {
    this.setState({
      sliding: true,
    })
    setTimeout(() => {
     this.setState({
        sliding: false
      })
    }, 50)
  }

  nextSlide() {
    this.setState({ position: this.state.position + this.state.itemWidth})
    this.doSliding();
  }

  prevSlide() {
    this.setState({ position: this.state.position - this.state.itemWidth})
    this.doSliding();
  }

  componentDidMount() {
    this.calcItemWidth();
    window.addEventListener("resize", () => this.calcItemWidth());
  }

  calcItemWidth() {
    let device = "smartphone";

    if(window.innerWidth >= 500) 
      device = "tablet";
    if(window.innerWidth >= 1024) 
      device = "desktop";

    this.setState({itemWidth: Math.floor(100/this.props.itemsPerSlide[device])})
  }

  render() {
    const itemsWidth = this.props.children.length*this.state.itemWidth;
    const lastPage = this.state.position === itemsWidth - 100;
    const firstPage = this.state.position === 0;

    return (
      <Container>
        <Title>{this.props.title}</Title>
        <Content>
          <Items position={this.state.position}>
            { this.props.children && this.props.children.map((child, index) => <Item itemWidth={this.state.itemWidth} key={index}>{child}</Item>) }
          </Items>
          {<PrevButton onClick={ () => this.prevSlide()} disabled={firstPage}>Prev</PrevButton>}
          {<NextButton onClick={ () => this.nextSlide()} disabled={lastPage}>Next</NextButton>}
        </Content>
      </Container>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node
};

export default Carousel;