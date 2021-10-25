import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export default class SideNavBar extends React.Component {
  /* Write the necessary functions to show and hide the side bar on small devices */
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
    this.getScreenSolution = this.getScreenSolution.bind(this);
  }

  componentDidMount() {
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
    const { isMobile } = this.state;
    return (
      <>
        {isMobile && (
          <div class="header">
            <input class="menu-button" type="checkbox" id="menu-button" />
            <label class="menu-icon" for="menu-button">
              <span class="nav-icon"></span>
            </label>
          </div>
        )}
        <SideNavBarCont className={!isMobile ? "visible" : "not-visible"}>
          <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
            Wesley
            <NavIcon arrow>
              <img src={Arrow} alt="Arrow" />
            </NavIcon>
          </SideNavMainLink>
          <SideNavMainLink
            className="menu_nav_link"
            style={{ backgroundColor: `${colors.primaryColor}` }}
            to="/discover"
          >
            Discover
            <NavIcon search>
              <img src={SearchWhite} alt="SearchWhite" />
            </NavIcon>
          </SideNavMainLink>
          <SideNavHeader>
            <HeaderText>Watched</HeaderText>
          </SideNavHeader>
          <NavLink className="menu_nav_link" to="/watched/movies">
            Movies
          </NavLink>
          <NavLink className="menu_nav_link" to="/watched/tv-shows">
            Tv Shows
          </NavLink>
          <SideNavHeader>
            <HeaderText>Saved</HeaderText>
          </SideNavHeader>
          <NavLink className="menu_nav_link" to="/saved/movies">
            Movies
          </NavLink>
          <NavLink className="menu_nav_link" to="/saved/tv-shows">
            Tv Shows
          </NavLink>
        </SideNavBarCont>
      </>
    );
  }
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const NavIcon = styled.div`
  position: absolute;
  right: 35px;
  top: 35%;
`;

const SideNavHeader = styled.div``;

const HeaderText = styled.div`
  position: relative;
  display: block;
  padding: 25px 35px 25px 0px;
  font-size: 1.6em;
  font-weight: 400;
  color: white;
  margin-left: 35px;
  border-bottom: 1px solid ${colors.fontColor};
  margin-bottom: 20px;
`;

const NavLink = styled(Link)`
  position: relative;
  display: block;
  padding: 12px 35px;
  font-size: 1.2em;
  font-weight: 100;
  color: white;
  display: block;
`;
