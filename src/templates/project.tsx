import React from 'react';
import { graphql } from 'gatsby';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Link from '../components/link';
import Layout from '../components/layout';
import Head from '../components/head';

interface Props {
  readonly data: PageQueryData,
  readonly pageContext: {
    previous?: any
    next?: any
  },
  readonly classes: {
    content: string,
  }
}

const useStyles = (theme: Theme) => (
  createStyles({
    date: {
      marginBottom: 12,
    },
    content: {

    },
  })
);

class ProjectTemplate extends React.Component<Props> {
  render() {
    const project = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    const { classes } = this.props;

    return (
      <Layout title={siteTitle}>
        <Head title={project.frontmatter.title} description={project.excerpt} />
        <Box>
          <Typography align='center'>
            <Typography variant='h4'>{project.frontmatter.title}</Typography>
            <Typography color='textSecondary' className={classes.date}>{project.frontmatter.date}</Typography>
          </Typography>
          <Box className={classes.content}>
            <Typography paragraph dangerouslySetInnerHTML={{ __html: project.html }} />
            <Typography>
              {previous && (
                <Link to={previous.fields.slug} rel='prev'>
                  ← {previous.frontmatter.title}
                </Link>
              )}
              {next && (
                <Link to={next.fields.slug} rel='next'>
                  {next.frontmatter.title} →
                </Link>
              )}
            </Typography>
          </Box>
        </Box>
      </Layout>
    )
  }
}

export default withStyles(useStyles)(ProjectTemplate);

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
  markdownRemark: {
    id?: string
    excerpt?: string
    html: string
    frontmatter: {
      title: string
      date: string
    }
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 2500)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
