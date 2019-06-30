import React from 'react';
import { Link } from 'gatsby';
import { string } from 'prop-types';

interface Props: {
  readonly title ?: string
}

export default class Layout extends React.Component<Props> {
  render() {
    const { children } = this.props;

    return (
      <ul>
        <li>
          <Link to={'/'}>&plusmn;</Link>
        </li>
        <li>
          <Link to={'/tags'}>Categories</Link>
        </li>
        <li>
          <Link to={'/about'}>About Me</Link>
        </li>
      </ul>

    )
  }
}
