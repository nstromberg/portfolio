import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
interface Props {
  readonly node: Node
}

interface Node {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    date: string
  }
  excerpt: string
}

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`

const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`

const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`

export default class ProjectCard extends React.Component<Props> {
  render() {
    const { node } = this.props;
    const title = node.frontmatter.title || node.fields.slug;
    return (
      <CardWrapper key={node.fields.slug} >
        <CardHeading>
          <CardHeader>
            <Link to={node.fields.slug}>{title}</Link>
          </CardHeader>
        </CardHeading>
        <CardBody>
          <small>{node.frontmatter.date}</small>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </CardBody>>
    </CardWrapper>
    );
  }
}
