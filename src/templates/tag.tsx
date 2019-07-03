import React from 'react';
import { graphql } from 'gatsby';
import { Box, Typography, Grid, Theme, createStyles, withStyles, Container, Divider } from '@material-ui/core';

import Layout from '../components/layout';
import Head from '../components/head';
import ProjectCard from '../components/projectcard';

interface Props {
  readonly data: PageQueryData
  readonly pageContext: {
    tag: string
  }
  readonly classes: {
    title: string,
    divider: string,
    projectCard: string,
  }
}

const useStyles = (theme: Theme) => (
  createStyles({
    divider: {
      margin: theme.spacing(2),
    },
    title: {
      padding: theme.spacing(8, 0, 6),
    },
    projectCard: {
      maxWidth: 300,
    }
  })
)

class TagTemplate extends React.Component<Props> {
  render() {
    const { pageContext, data, classes } = this.props
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
          <Container maxWidth='sm'>
            <Typography className={classes.title} variant='h3' align='center'>
              Projects tagged {tag}
              <Divider className={classes.divider} variant='middle' />
            </Typography>
          </Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={4}
          >
            {projects.map(({ node }) => {
              return (
                <Grid item className={classes.projectCard}>
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

export default withStyles(useStyles)(TagTemplate);

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
