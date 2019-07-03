import React from 'react';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/grid';
import Box from '@material-ui/core/box';
import { Typography, Divider, Container } from '@material-ui/core';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import Layout from '../components/layout';
import Head from '../components/head';
import TagCard from '../components/tagcard';

interface Props {
  readonly data: PageQueryData
  readonly classes: {
    divider: string,
    title: string,
  }
}

const useStyles = (theme: Theme) => (
  createStyles({
    divider: {
      margin: theme.spacing(2),
    },
    title: {
      padding: theme.spacing(8, 0, 6),
    }
  })
)

class Tags extends React.Component<Props> {
  render() {
    const { data, classes } = this.props
    const siteTitle = data.site.siteMetadata.title
    const group = data.allMarkdownRemark.group

    return (
      <Layout title={siteTitle}>
        <Head title="All tags" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <Box>
          <Container maxWidth='sm'>
            <Typography className={classes.title} variant='h3' align='center'>
              All tags
              <Divider className={classes.divider} variant='middle' />
            </Typography>
          </Container>
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='flex-start'
            spacing={4}
          >
            {group.map(
              tag =>
                tag && (
                  <Grid item>
                    <TagCard tag={tag} />
                  </Grid>
                ),
            )}
          </Grid>
        </Box>
      </Layout >
    )
  }
}

export default withStyles(useStyles)(Tags);

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    group: {
      fieldValue: string
      totalCount: number
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
    allMarkdownRemark(filter: {frontmatter: {published: {ne: false}}}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
