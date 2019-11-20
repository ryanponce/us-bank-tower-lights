import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header css={{ gridArea: "header", padding: "32px 32px 0" }}>
    <h1 css={{ fontSize: "2.5rem", fontWeight: 900 }}>{siteTitle}</h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
