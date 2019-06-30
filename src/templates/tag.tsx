import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Head from '../components/head';
import ProjectCard from '../components/projectcard';

interface Props {
  readonly data: PageQueryData
  readonly pageContext: {
    tag: string
  }
}

const StyledGrid = styled.div`
{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding-bottom: 36px;
}
`;

export default class TagTemplate extends React.Component<Props> {
  render() {
    const { pageContext, data } = this.props
    const { tag } = pageContext
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allMarkdownRemark.edges

    return (
      <Layout title={siteTitle}>
        <Head
          title={'Projects tagged "${tag}"'}
          keywords={['portfolio', 'gatsby', 'typescript', 'react', tag]}
        />
        <article>
          <header>
            <h1>Projects tagged {tag}</h1>
          </header>
          <StyledGrid>
            {projects.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
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
    totalCount: number
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
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000, filter: {frontmatter: {tags: {in: [$tag]}}}) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 2500)
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`;
