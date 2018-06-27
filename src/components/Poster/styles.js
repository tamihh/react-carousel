import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
`
export const Container = styled.li`
  position: relative;
  font-size: 20px;
  cursor: pointer;
  list-style: none;
  transition: transform .25s ease;
  &:hover {
    transform: scale(1.1);
    z-index: 999;
    .content {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 5%;
  position: absolute;
  bottom: 0;
  opacity: 0;
  transition: opacity .25s ease;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.85) 52%);
  width: 100%;
  box-sizing: border-box;
  height: 100%;
`;

export const Title = styled.h3`
  color: #FFF;
  font-size: 16px;
  line-height: 21px;
  margin: 5px 0;
  display: block;
  white-space: pre-line;
`;

export const MetadataList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

export const MetadataItem = styled.li`
  font-size: 12px;
  color: #ccc;
  list-style: none;
  & ~ .item {
    &:before {
      content: ',';
      margin-right: 10px;
    }
  }
`;
