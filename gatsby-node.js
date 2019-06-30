/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  return graphql(`
    {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Get the templates
    const projectTemplate = path.resolve('./src/templates/project.tsx');
    const tagTemplate = path.resolve('./src/templates/tag.tsx');

    // Create portfolio pages
    const projects = result.data.allMarkdownRemark.edges;
    projects.forEach((project, index) => {
      const previous = index === projects.length - 1 ? null : projects[index + 1].node;
      const next = index === 0 ? null : projects[index - 1].node;

      actions.createPage({
        path: project.node.fields.slug,
        component: projectTemplate,
        context: {
          slug: project.node.fields.slug,
          previous,
          next,
        },
      });
    });

    // Add tags for each post
    let tags = [];
    projects.forEach(project => {
      if (project.node.frontmatter.tags) {
        tags = tags.concat(project.node.frontmatter.tags);
      }
    });
    const uniqueTags = [...new Set(tags)];

    // create page for each tag
    uniqueTags.forEach(tag => {
      if (!tag) return;
      actions.createPage({
        path: `/tags/${tag}`,
        component: tagTemplate,
        context: {
          tag,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    actions.createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
