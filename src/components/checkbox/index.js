import React from "react";
import styled from "styled-components";

export default class CheckBox extends React.Component {
  // TEST
  render() {
    const { item } = this.props;
    return (
      <CheckboxCont>
        <input type="checkbox" />
        <span style={{ color: "gray", paddingLeft: "20px" }}>{item}</span>
      </CheckboxCont>
    );
  }
}

const CheckboxCont = styled.div`
  position: relative;
  margin-bottom: 15px;
`;
