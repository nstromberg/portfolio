import React from 'react';
import { graphql } from 'gatsby';
import {
  Grid,
  Box,
  Theme,
  withStyles,
  Typography,
  Container,
  Button,
  Divider,
} from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';

import Layout from '../components/layout';
import Head from '../components/head';
import ProjectCard from '../components/projectcard';

interface Props {
  readonly data: PageQueryData
  readonly classes: {
    heroContent: string,
    heroButtons: string,
    divider: string,
    projects: string,
  }
}

const useStyles = (theme: Theme) => (
  createStyles({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    divider: {
      margin: theme.spacing(2),
    },
    projects: {
      margin: theme.spacing(4),
    },
  })
)

class Index extends React.Component<Props> {
  render() {
    const { data, classes } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allMarkdownRemark.edges

    return (
      <Layout title={siteTitle}>
        <Head title="Overview of projects" keywords={['portfolio', 'gatsby', 'javascript', 'react', 'typescript']} />
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Nathan's Portfolio</Typography>
            <Divider variant='middle' />
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              <Box my={2}>
                <Typography paragraph>
                  {data.site.siteMetadata.author.name} is a Computer Science and Math double major at the University of Kentucky
                  focused on ML/AI and their applications to problem solving in all fields.
            </Typography>
              </Box>
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href={`mailto:${data.site.siteMetadata.author.email}`}>
                    Email
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href={data.site.siteMetadata.social.github}>
                    Github
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Box className={classes.projects}>
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

export default withStyles(useStyles)(Index);

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string,
      author: {
        name: string,
        email: string,
      },
      social: {
        github: string,
      }
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
        author {
          name
          email
        }
        description
        social {
          github
        }
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
