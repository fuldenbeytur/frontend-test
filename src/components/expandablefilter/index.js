import React from "react";
import styled from "styled-components";
import Checkbox from "../checkbox";

export default class ExpandableFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genreFiltersShown: false,
      voteFiltersShown: false,
      languageFiltersShown: false,
    };
  }

  expandableFilterItems(index, genre) {
    return <Checkbox key={index} item={genre.name} />;
  }

  render() {
    const { genreFiltersShown, voteFiltersShown, languageFiltersShown } =
      this.state;
    const { genres, ratings, languages } = this.props;
    return (
      <>
        <ExpandableFilterWrapper>
          <div
            className={
              genreFiltersShown ? "expandable minus" : "expandable plus"
            }
            onClick={() => {
              this.setState({ genreFiltersShown: !genreFiltersShown });
            }}
          ></div>
          <span style={{ fontSize: "1.2em" }}>Select genre(s)</span>
        </ExpandableFilterWrapper>
        <div style={{ margin: "15px 0px 0px 1px" }}>
          {genreFiltersShown &&
            genres.map((genre, index) =>
              this.expandableFilterItems(index, genre)
            )}
        </div>
        <ExpandableFilterWrapper>
          <div
            className={
              voteFiltersShown ? "expandable minus" : "expandable plus"
            }
            onClick={() => {
              this.setState({ voteFiltersShown: !voteFiltersShown });
            }}
          ></div>
          <span style={{ fontSize: "1.2em" }}>Select min. vote</span>
        </ExpandableFilterWrapper>
        <div style={{ margin: "15px 0px 0px 15px" }}>
          {voteFiltersShown &&
            ratings.map((rating, index) =>
              this.expandableFilterItems(index, rating)
            )}
        </div>
        <ExpandableFilterWrapper>
          <div
            className={
              languageFiltersShown ? "expandable minus" : "expandable plus"
            }
            onClick={() => {
              this.setState({ languageFiltersShown: !languageFiltersShown });
            }}
          ></div>
          <span style={{ fontSize: "1.2em" }}>Select language</span>
        </ExpandableFilterWrapper>
        <div style={{ margin: "15px 0px 0px 15px" }}>
          {languageFiltersShown &&
            languages.map((language, index) =>
              this.expandableFilterItems(index, language)
            )}
        </div>
      </>
    );
  }
}

const ExpandableFilterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: -15px;
`;
