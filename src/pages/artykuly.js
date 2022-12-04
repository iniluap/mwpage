import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { graphql } from 'gatsby';

const ArticlesStyles = styled.section`
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

export default function ArtykulyPage({ data }) {
  const posts = data.allMarkdownRemark.edges;
  return (
    <>
      <SectionHeader sectionTitle="Artykuły" />
      <ArticlesStyles>
        {posts.map((post) => (
          <Card
            key={post.node.frontmatter.title}
            title={post.node.frontmatter.title}
            subtitle={post.node.frontmatter.subtitle}
            date={post.node.frontmatter.date}
            sneakPeak={post.node.excerpt}
            linkUrl={post.node.frontmatter.path}
          ></Card>
        ))}
      </ArticlesStyles>
    </>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date
            subtitle
          }
          html
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`;
