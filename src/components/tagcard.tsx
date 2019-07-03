import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Link from './link';

interface Props {
  readonly tag: Tag
  readonly classes: {
    card: string,
    subHeading: string,
  }
}

interface Tag {
  fieldValue: string
  totalCount: number
}

const useStyles = (theme: Theme) => (
  createStyles({
    card: {
      minWidth: 250,
    },
    subHeading: {
      marginTop: theme.spacing(2),
    }
  })
)

class TagCard extends React.Component<Props> {
  render() {
    const { tag, classes } = this.props;
    return (
      <Card>
        <CardContent>
          <Typography variant='h6' component='h2' align='center'>
            <Link color='inherit' to={`/tags/${tag.fieldValue}`}>{tag.fieldValue}</Link>
          </Typography>
          <Typography paragraph className={classes.subHeading} align='center'>
            {tag.totalCount} post
            {tag.totalCount === 1 ? '' : 's'}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(useStyles)(TagCard);
