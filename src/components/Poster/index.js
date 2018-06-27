import React, { PropTypes } from 'react';
import ImageDefault from 'Common/assets/images/poster-placeholder.png';
import { Container, Link, Image, Content, Title, MetadataList, MetadataItem} from './styles';
import moment from 'moment';

const Poster = ({ content }) => {
  const { id, poster_path, title, release_date } = content;
  const posterUrl = poster_path ? poster_path : ImageDefault

  return (
    <Container className="tile">
      <Link href={`https://www.themoviedb.org/movie/${id}`} target="blank" className="link">
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