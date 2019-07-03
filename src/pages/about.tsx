import React from 'react'
import { graphql } from 'gatsby'
import { Box, Typography, Container, Divider } from '@material-ui/core';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import Layout from '../components/layout'
import Head from '../components/head'

interface Props {
  readonly data: PageQueryData
  classes: {
    divider: string,
    title: string,
    content: string,
    grouping: string,
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
    content: {
      margin: theme.spacing(4),
    },
    grouping: {
      'list-style-type': 'none',
      margin: 0,
      padding: 0,
    }
  })
)

class Tags extends React.Component<Props> {
  render() {
    const { data, classes } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout title={siteTitle}>
        <Head title="All tags" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <Box>
          <Container maxWidth='sm'>
            <Typography className={classes.title} variant='h3' align='center'>
              About Nathan
              <Divider className={classes.divider} variant='middle' />
            </Typography>
          </Container>
          <Container className={classes.content}>
            <ul className={classes.grouping}>
              <li>
                <Typography variant='h4' gutterBottom>Education</Typography>
                <Typography paragraph>
                  Currently pursuing a Bachelor's of Engineering in Computer Science and Mathematics
                </Typography>
              </li>
              <li>
                <Typography variant='h4' gutterBottom>Achievements</Typography>
                <Typography paragraph>
                  <ul>
                    <li>National Merit Scholar</li>
                  </ul>
                </Typography>

              </li>
            </ul>
          </Container>
        </Box >
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
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
