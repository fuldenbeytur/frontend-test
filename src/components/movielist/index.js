import React from "react";
import styled from "styled-components";
import MovieItem from "../movieitem";

export default class MovieList extends React.Component {
  render() {
    const { movies, genres, isMobile } = this.props;
    function lookupGenre(ids) {
      return genres
        .filter((genre) => ids.includes(genre.id))
        .map((g) => g.name);
    }
    return (
      <MoviesWrapper
        style={isMobile ? { marginRight: "0px" } : { marginRight: "15px" }}
      >
        {movies.map((movie, index) => {
          return (
            <MovieItem
              key={index}
              isMobile={isMobile}
              movie={movie}
              genre={lookupGenre(movie.genre_ids)}
            />
          );
        })}
      </MoviesWrapper>
    );
  }
}

const MoviesWrapper = styled.div`
  position: relative;
`;
