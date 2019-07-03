import React from 'react';
import Link from './link';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Typography, Toolbar, AppBar } from '@material-ui/core';

interface Props {
  readonly title?: string,
  readonly classes: {
    root: string,
    link: string,
    name: string,
    footer: string,
    main: string,
  }
}

const useStyles = (theme: Theme) => (
  createStyles({
    root: {
      flexGrow: 1,
    },
    link: {
      marginRight: theme.spacing(2),
    },
    name: {
      flexGrow: 1,
    },
    footer: {
      margin: theme.spacing(4),
    },
    main: {
      margin: theme.spacing(4),
    },
  })
);

class Layout extends React.Component<Props> {
  render() {
    const { children, classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography variant='h6'>
              <Link color='inherit' className={classes.link} to={`/`}>&plusmn;</Link>
              <Link color='inherit' className={classes.link} to={`/tags`}>Categories</Link>
              <Link color='inherit' className={classes.link} to={`/about`}>About</Link>
            </Typography>
            <Typography variant='h6' align='right' className={classes.name}>
              {'Nathan Stromberg'}
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.main}>
          {children}
        </Paper>
        <Typography variant='body2' color='textSecondary' align='center' className={classes.footer}>
          {'Built with love using '}
          <Link color='inherit' href='https://gatsbyjs.com/'>
            Gatsby
          </Link>
          {' and '}
          <Link color='inherit' href='https://typescriptlang.org/'>
            Typescript
          </Link>
        </Typography>
      </div>
    )
  }
}

export default withStyles(useStyles)(Layout);
