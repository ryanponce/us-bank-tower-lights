import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const night = ({ colors, purpose }) => {
  return <Night colors={colors} title={purpose} />;
};

night.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  purpose: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default night;

const Night = styled.div`
  background: ${({ colors }) => {
    if (colors.length === 1) {
      return colors.map(color => color);
    }

    return `linear-gradient(to right, ${colors.reduce((acc, curr, index) => {
      if (index === 0) {
        return curr;
      }

      return `${acc}, ${curr}`;
    }, "")}
   )`;
  }};
  border-radius: 100%;
  height: 64px;
  width: 64px;
`;
