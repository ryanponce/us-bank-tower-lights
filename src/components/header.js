import PropTypes from "prop-types";
import React from "react";
import { motion } from "framer-motion";

const Header = ({ siteTitle }) => (
  <motion.header
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    css={{ gridArea: "header", padding: "32px 32px 0" }}
  >
    <h1 css={{ fontSize: "2.5rem", fontWeight: 900 }}>{siteTitle}</h1>
  </motion.header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
