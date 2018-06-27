import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  background: ${props => props.backgroundColor || 'none'};
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

export default Button;