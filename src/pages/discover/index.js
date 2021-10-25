import React from "react";
import styled from "styled-components";
import Api from "../../fetcher";
import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.api = new Api();
    this.state = {
      isMobile: false,
      keyword: "",
      year: 0,
      results: [],
      totalCount: 0,
      genreOptions: [],
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 },
      ],
      languageOptions: [
        { id: "GR", name: "Greek" },
        { id: "EN", name: "English" },
        { id: "RU", name: "Russian" },
        { id: "PO", name: "Polish" },
      ],
    };
  }

  getPopularMovies = () => {
    this.api.getMovieList().then((response) => {
      this.setState({
        results: response.data.results,
        totalCount: response.data.total_results,
      });
    });
  };

  getMovieGenres = () => {
    this.api.getGenres().then((response) => {
      this.setState({
        genreOptions: response.data.genres,
      });
    });
  };

  searchMovies(keyword, year) {
    this.api.searchMovies(keyword, year).then((response) => {
      this.setState({
        results: response.data.results,
        totalCount: response.data.total_results,
      });
    });
  }

  componentDidMount() {
    this.getPopularMovies();
    this.getMovieGenres();
    window.addEventListener(
      "getScreenSolution",
      this.getScreenSolution.bind(this)
    );
    this.getScreenSolution();
  }

  getScreenSolution() {
    let currentIsMobile = window.innerWidth <= 760;
    if (currentIsMobile !== this.state.isMobile) {
      this.setState({ isMobile: currentIsMobile });
    }
  }

  componentWillUnmount() {
    window.removeEventListener(
      "getScreenSolution",
      this.getScreenSolution.bind(this)
    );
  }

  render() {
    const {
      genreOptions,
      languageOptions,
      ratingOptions,
      totalCount,
      results,
      isMobile,
    } = this.state;
    return (
      <DiscoverWrapper
        style={
          isMobile
            ? { display: "block", padding: "20px 15px" }
            : { display: "flex", padding: "20px 45px" }
        }
      >
        {isMobile && <MobilePageTitle>Discover</MobilePageTitle>}
        <div
          style={
            isMobile
              ? {
                  paddingLeft: "0px",
                  display: "flex",
                  flexDirection: "column-reverse",
                }
              : { paddingLeft: "280px", display: "flex" }
          }
        >
          <MovieResults>
            {totalCount > 0 && <TotalCounter>{totalCount} movies</TotalCounter>}
            {results.length > 0 ? (
              <MovieList
                isMobile={isMobile}
                movies={results || []}
                genres={genreOptions || []}
              />
            ) : (
              <div>No Movies Found.</div>
            )}
          </MovieResults>
          <MovieFilters>
            <SearchFilters
              genres={genreOptions}
              isMobile={isMobile}
              ratings={ratingOptions}
              languages={languageOptions}
              searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
            />
          </MovieFilters>
        </div>
      </DiscoverWrapper>
    );
  }
}

const DiscoverWrapper = styled.main`
  padding: 20px 45px;
  display: flex;
`;

const TotalCounter = styled.div`
  font-weight: 500;
  margin: 20px 0px;
  color: lightgray;
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.div`
  font-size: 2em;
  color: black;
  margin-left: 50px;
`;
