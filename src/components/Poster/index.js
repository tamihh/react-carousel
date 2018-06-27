import React, { PropTypes } from 'react';
import styled from 'styled-components';
import ImageDefault from 'Common/assets/images/poster-placeholder.png';
import moment from 'moment';

const Link = styled.a`
  text-decoration: none;
`
const Container = styled.li`
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

const Image = styled.img`
  width: 100%;
`;

const Content = styled.div`
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

const Title = styled.h3`
  color: #FFF;
  font-size: 16px;
  line-height: 21px;
  margin: 5px 0;
  display: block;
  white-space: pre-line;
`;

const MetadataList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

const MetadataItem = styled.li`
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


const Poster = ({ content }) => {
  const { poster_path, title, vote_average, release_date } = content;
  const posterUrl = poster_path ? poster_path : ImageDefault

  return (
    <Container className="tile">
      <Link href={`http://www.imdb.com`} target="blank" className="link">
        <Image src={`https://image.tmdb.org/t/p/w400${posterUrl}`} alt={title} />
        <Content className="content">
          <Title>{title}</Title>
          <MetadataList>
            <MetadataItem className="item">{moment(release_date).format("MMMM/ YYYY")}</MetadataItem>
          </MetadataList>
        </Content>
      </Link>
    </Container>
  );
};


export default Poster;