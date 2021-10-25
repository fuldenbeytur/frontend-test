import React from "react";
import styled, { css } from "styled-components";
import * as colors from "../../colors";
import ExpandableFilter from "../../components/expandablefilter";
import SearchBar from "../../components/searchbar";

export default class SearchFilters extends React.Component {
  render() {
    const { genres, ratings, languages, searchMovies, isMobile } = this.props;
    return (
      <FiltersWrapper>
        <SearchFiltersCont
          style={
            isMobile
              ? { backgroundColor: "transparent" }
              : { backgroundColor: "white" }
          }
        >
          <SearchBar isMobile={isMobile} searchMovies={searchMovies} />
        </SearchFiltersCont>
        {!isMobile && (
          <SearchFiltersCont>
            <CategoryTitle>Movie</CategoryTitle>
            <ExpandableFilter
              genres={genres}
              ratings={ratings}
              languages={languages}
            />
          </SearchFiltersCont>
        )}
      </FiltersWrapper>
    );
  }
}

const FiltersWrapper = styled.div`
  position: relative;
  margin-top: 60px;
`;

const SearchFiltersCont = styled.div`
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div`
  font-weight: 600;
  font-size: 1.1em;
  margin-bottom: 12px;
`;
