import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'Components/Button';

const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  width: ${(props) => props.widthContainer}px;
  transition: ${(props) => props.sliding ? 'none' : 'transform 1s ease'};
  transform: ${({ position }) => {
    if (position > 0) {
      let newPosition = position;
      return `translateX(calc(0% - ${newPosition}%))`
    }
    return `translateX(0)`
  }};
`;

const Item = styled.div`
  flex: 1 0 ${({ itemWidth }) => itemWidth}%;
`;

const NextButton = Button.extend`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const PrevButton = Button.extend`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

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
    window.addEventListener("resize", () => {
      let device = "smartphone";

      if(window.innerWidth >= 500) 
        device = "tablet";
      if(window.innerWidth >= 1024) 
        device = "desktop";

      this.setState({ 
        windowWidth: window.innerWidth,
        itemWidth: Math.floor(100/this.props.itemsPerSlide[device]),
      })
    });
  }


  calcItemWidth() {
    let device = "smartphone";

    if(this.state.windowWidth >= 500) 
      device = "tablet";
    if(this.state.windowWidth >= 1024) 
      device = "desktop";

    this.setState({ itemWidth: Math.floor(100/this.props.itemsPerSlide[device]) });
  }

  render() {
    const widthContainer = '100%';
    const itemsWidth = this.props.children.length*this.state.itemWidth;
    const lastPage = this.state.position === itemsWidth - 100;
    const firstPage = this.state.position === 0;

    return (
      <Container>
        <Content widthContainer={widthContainer} position={this.state.position}>
          { this.props.children.map((child, index) => <Item itemWidth={this.state.itemWidth} key={ index }>{child}</Item>) }
        </Content>
        {!firstPage && <PrevButton onClick={ () => this.prevSlide()} disabled={this.state.sliding}>Prev</PrevButton>}
        {!lastPage && <NextButton onClick={ () => this.nextSlide()} disabled={this.state.sliding}>Next</NextButton>}
      </Container>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node
};

export default Carousel;