import React from "react";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import FilterIcon from "../../images/filter-icon.png";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      year: "",
      warningDisplay: false,
    };
  }
  render() {
    const { keyword, year, warningDisplay } = this.state;
    const { searchMovies, isMobile } = this.props;
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div
            className="search-bar-section"
            style={isMobile ? { width: "100%" } : { width: "280px" }}
          >
            <img src={SearchIcon} alt="SearchIcon" />
            <input
              onKeyPress={(e) => {
                if (e.key === "Enter" && keyword)
                  searchMovies(e.target.value, year);
              }}
              onChange={(e) => {
                this.setState({ keyword: e.target.value });
              }}
              value={keyword}
              type="text"
              placeholder={warningDisplay ? "Please type a keyword" : ""}
            />
          </div>
          {isMobile && (
            <span
              style={{
                marginLeft: "15px",
                height: "46px",
                borderBottom: "3px solid #c4ca18",
              }}
            >
              <img src={FilterIcon} alt="SearchIcon" />
            </span>
          )}
        </div>
        {!isMobile && (
          <div className="search-bar-section">
            <img src={CalendarIcon} alt="CalendarIcon" />
            <input
              onKeyPress={(e) => {
                if (e.key === "Enter" && keyword)
                  searchMovies(keyword, e.target.value);
                else {
                  this.setState({ warningDisplay: true });
                }
              }}
              onChange={(e) => {
                this.setState({ year: e.target.value });
              }}
              value={year}
              type="number"
              placeholder="Year of Release"
            />
          </div>
        )}
      </div>
    );
  }
}
