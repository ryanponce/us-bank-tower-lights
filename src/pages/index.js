import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Night from "../components/night";

const IndexPage = ({ data }) => {
  const { nodes } = data.allAirtable;

  return (
    <Layout>
      <SEO title="Home" />

      <p css={{ fontSize: "1.5rem", lineHeight: 1.5, marginTop: "32px" }}>
        Occasionally, the US Bank Tower in Los Angeles, California will change
        the lights on the crown. Below is a list of all of the changes that have
        happened and what cause the lights are associated with.
      </p>

      <h2 css={{ fontSize: "2rem", fontWeight: 900, marginTop: "64px" }}>
        Nights
      </h2>

      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 64px)",
          gridGap: "32px",
          marginTop: "32px"
        }}
      >
        {nodes.map(node => (
          <Night key={node.id} colors={node.data.colors} />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AllNightsQuery {
    allAirtable(sort: { fields: data___date, order: DESC }) {
      nodes {
        data {
          colors
          purpose
          date
          twitter_link
        }
        id
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allAirtable: PropTypes.shape({
      nodes: PropTypes.arrayOf({
        data: PropTypes.shape({
          colors: PropTypes.arrayOf(PropTypes.string).isRequired,
          purpose: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          twitter_link: PropTypes.string.isRequired
        }).isRequired,
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default IndexPage;
