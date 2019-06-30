import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout'
import Head from '../components/head'

interface Props {
  readonly data: PageQueryData
  readonly pageContext: {
    previous?: any
    next?: any
  }
}

const StyledUl = styled('ul')`
  list-style-type: none;

  li::before {
    content: '' !important;
    padding-right: 0 !important;
  }
`

export default class ProjectTemplate extends React.Component<Props> {
  render() {
    const project = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout title={siteTitle}>
        <Head title={project.frontmatter.title} description={project.excerpt} />
        <article>
          <header>
            <h1>{project.frontmatter.title}</h1>
            <p>{project.frontmatter.date}</p>
          </header>
          <div className={'page-content'}>
            <div dangerouslySetInnerHTML={{ __html: project.html }} />
            <StyledUl>
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel='prev'>
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                  <Link to={next.fields.slug} rel='next'>
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </StyledUl>
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
