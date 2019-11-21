import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { motion } from "framer-motion";

import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      css={{
        display: "grid",
        gridGap: "32px",
        gridTemplateColumns: "1fr",
        gridTemplateAreas: "'header' 'main' 'footer'",
        gridTemplateRows: "auto 1fr auto",
        maxWidth: "48rem",
        minHeight: "100vh"
      }}
    >
      <GlobalStyle />

      <Header siteTitle={data.site.siteMetadata.title} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 1
        }}
        dela
        css={{ gridArea: "main", padding: "0 32px" }}
      >
        {children}
      </motion.main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        css={{ gridArea: "footer", padding: "0 32px 32px" }}
      >
        Made in Los Angeles by Ryan Ponce
      </motion.footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

const GlobalStyle = createGlobalStyle`
  ${reset}

  html { 
    background: black;
    color: white;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;
