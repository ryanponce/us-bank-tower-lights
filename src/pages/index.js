import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Night from "../components/night";

const IndexPage = ({ data }) => {
  const { nodes } = data.allAirtable;

  return (
    <Layout>
      <SEO title="Home" />
      <Nights>
        {nodes.map(node => (
          <Night key={node.id} colors={node.data.colors} />
        ))}
      </Nights>
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

const Nights = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 64px);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding-left: 0;
`;
