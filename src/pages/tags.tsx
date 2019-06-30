import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import TagCard from '../components/tagcard';

interface Props {
  readonly data: PageQueryData
}

export default class Tags extends React.Component<Props> {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const group = data.allMarkdownRemark.group

    return (
      <Layout title={siteTitle}>
        <Head title="All tags" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <article>
          <h1>All tags</h1>
          <div className={`page-content`}>
            {group.map(
              tag =>
                tag && (
                  <TagCard tag={tag} />
                ),
            )}
          </div>
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
