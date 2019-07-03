import React from 'react';
import { graphql } from 'gatsby';
import { Box, Typography, Grid } from '@material-ui/core';

import Layout from '../components/layout';
import Head from '../components/head';
import ProjectCard from '../components/projectcard';

interface Props {
  readonly data: PageQueryData
  readonly pageContext: {
    tag: string
  }
}

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
        <Box>
          <Typography variant='h3'>
            Projects tagged {tag}
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={4}
          >
            {projects.map(({ node }) => {
              return (
                <Grid item>
                  <ProjectCard node={node} />
                </Grid>
              )
            })}
          </Grid>
        </Box>
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
`;
