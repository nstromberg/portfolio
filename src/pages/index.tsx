import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Head from '../components/head';
import Bio from '../components/bio';
import ProjectCard from '../components/projectcard';

interface Props {
  readonly data: PageQueryData
}

const StyledGrid = styled.div`
{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding-bottom: 36px;
}
`;

export default class Index extends React.Component<Props> {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allMarkdownRemark.edges

    return (
      <Layout title={siteTitle}>
        <Head title="Overview of projects" keywords={['portfolio', 'gatsby', 'javascript', 'react', 'typescript']} />
        <Bio />
        <article>
          <StyledGrid>
            {projects.map(({ node }) => {
              return (
                <ProjectCard node={node} />
              )
            })}
          </StyledGrid>
        </article>
      </Layout>
    )
  }
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        fields: {
          slug: string
        }
        frontmatter: {
          date: string
          title: string
        }
      }
    }[]
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {published: {ne: false}}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
