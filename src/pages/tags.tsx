import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Head from '../components/head';
import TagCard from '../components/tagcard';

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
          <StyledGrid>
            {group.map(
              tag =>
                tag && (
                  <TagCard tag={tag} />
                ),
            )}
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
