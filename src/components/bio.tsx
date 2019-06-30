import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

type StaticQueryData = {
  site: {
    siteMetadata: {
      description: string
      social: {
        github: string
      }
    }
  }
  author: {
    name: string
    email: string
  }
}

export default function () {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              description
              social {
                github
              }
            }
          }
          author {
            name
            email
          }
        }
      `}
      render={(data: StaticQueryData) => {
        const { description, social } = data.site.siteMetadata;
        const { email, name } = data.author;
        return (
          <div>
            <h1>{description}</h1>
            <p>
              {name} is a Computer Science and Math double major at the University of Kentucky
              focused on ML/AI and their applications to problem solving in all fields.
              <br />
              <a href={`mailto:${email}`}>Email</a>
              <a href={social.github}>Github</a>
            </p>
          </div>
        );
      }}
    />
  )
}
