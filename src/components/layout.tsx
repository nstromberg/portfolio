import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 16px;

    a {
      background: none;
    }
  }
`;

const StyledFooter = styled.footer`
  padding-bottom: 36px;
`;

interface Props {
  readonly title?: string
}

export default class Layout extends React.Component<Props> {
  render() {
    const { children } = this.props;

    return (
      <>
        <StyledNav className='navigation'>
          <ul>
            <li>
              <Link to={`/`}>&plusmn;</Link>
            </li>
            <li>
              <Link to={`/tags`}>Categories</Link>
            </li>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
          </ul>
        </StyledNav>
        <div className='content'>
          {children}
        </div>
        <StyledFooter className='footer'>
          Built with
          {' '}
          <a href='https://gatsbyjs.org'>Gatsby</a>
          {' '}
          and
          {' '}
          <a href='https://typescriptlang.org'>Typescript</a>
        </StyledFooter>
      </>
    )
  }
}
