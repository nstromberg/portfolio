import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from './link';

interface Props {
  readonly node: Node,
  readonly classes: {
    card: string,
    date: string,
  }
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

const useStyles = (theme: Theme) => (
  createStyles({
    card: {
      minWidth: 250,
    },
    date: {
      marginBottom: theme.spacing(2),
    }
  })
);

class ProjectCard extends React.Component<Props> {
  render() {
    const { node, classes } = this.props;
    const title = node.frontmatter.title || node.fields.slug;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='h6' component='h2'>
            <Link to={node.fields.slug} color='inherit'>{title}</Link>
          </Typography>
          <Typography color='textSecondary' className={classes.date}>{node.frontmatter.date}</Typography>
          <Typography paragraph dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(useStyles)(ProjectCard);
