import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

interface Props {
  readonly tag: Tag
}

interface Tag {
  fieldValue: string
  totalCount: number
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
  text-align: center;
`

export default class ProjectCard extends React.Component<Props> {
  render() {
    const { tag } = this.props;
    return (
      <CardWrapper key={tag.fieldValue} >
        <CardHeading>
          <CardHeader>
            <Link to={`/tags/${tag.fieldValue}`}>{tag.fieldValue}</Link>
          </CardHeader>
        </CardHeading>
        <CardBody>
          <small>
            {tag.totalCount} post
            {tag.totalCount === 1 ? '' : 's'}
          </small>
        </CardBody>
      </CardWrapper>
    );
  }
}

