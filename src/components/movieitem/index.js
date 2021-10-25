import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

export default class MovieItem extends React.Component {
  render() {
    const { movie, genre, isMobile } = this.props;
    return (
      <MovieItemWrapper
        style={isMobile ? { height: "200px" } : { height: "274px" }}
      >
        <LeftCont>
          <img
            style={
              !isMobile
                ? { height: "auto", minWidth: "100%" }
                : { height: "98%" }
            }
            src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
            alt="SearchIcon"
          />
        </LeftCont>
        <RightCont
          style={!isMobile ? { fontSize: "1em" } : { fontSize: "0.7em" }}
        >
          <div style={{ display: "flex" }}>
            <HeaderText>{movie.original_title}</HeaderText>
            <Vote style={isMobile ? { height: "14px" } : { height: "22px" }}>
              {movie.vote_average}
            </Vote>
          </div>
          <div className="genre-items">
            {genre.map((g, i) => {
              return <span key={i}>{g}</span>;
            })}
          </div>
          <div
            style={
              !isMobile
                ? { height: "130px", overflow: "hidden", marginBottom: "8px" }
                : { height: "47%", overflow: "hidden", marginBottom: "8px" }
            }
            className="movie-overview"
          >
            {movie.overview}
          </div>
          <div className="movie-release-date">{movie.release_date}</div>
        </RightCont>
      </MovieItemWrapper>
    );
  }
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  margin-bottom: 15px;
  display: flex;
`;

const LeftCont = styled.div`
  padding: 20px;
  width: 21%;
`;

const RightCont = styled.div`
  padding: 20px 20px 20px 0px;
  width: 100%;
`;

const HeaderText = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  width: 100%;
`;

const Vote = styled.div`
  background-color: ${colors.primaryColor};
  color: white;
  width: 28px;
  padding: 4px;
  font-weight: 700;
  border-radius: 8px;
  text-align: center;
`;
