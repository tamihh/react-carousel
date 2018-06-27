import styled from 'styled-components';
import Button from 'Components/Button';

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  padding: 50px 0;
`;

export const Title = styled.h2`
  font-size: 3rem;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
`;

export const Items = styled.div`
  display: flex;
  width: 100%;
  transition: ${(props) => props.sliding ? 'none' : 'transform .5s ease'};
  transform: ${({ position }) => {
    if (position > 0) {
      let newPosition = position;
      return `translateX(calc(0% - ${newPosition}%))`
    }
    return `translateX(0)`
  }};
`;

export const Item = styled.div`
  flex: 1 0 ${({ itemWidth }) => itemWidth}%;
`;

export const NextButton = Button.extend`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  padding: 10px;
  &:disabled {
    opacity: 0.5;
  }
`;

export const PrevButton = Button.extend`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  padding: 10px;
  &:disabled {
    opacity: 0.5;
  }
`;