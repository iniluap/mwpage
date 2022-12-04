import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const PostMetaStyles = styled.div`
  display: flex;
  margin-bottom: 5rem;

  p {
    margin: 0;
    padding: 0 0.5rem;
    color: var(--accent-color);
    line-height: 1;

    &:nth-of-type(1) {
      border-right: 1px solid var(--grey);
    }
  }
`;

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <PostMetaStyles>
        <p>{post.frontmatter.date}</p>
        <p>{post.frontmatter.subtitle}</p>
      </PostMetaStyles>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query {
    markdownRemark {
      frontmatter {
        title
        date
        subtitle
      }
      html
    }
  }
`;

export default BlogPost;
