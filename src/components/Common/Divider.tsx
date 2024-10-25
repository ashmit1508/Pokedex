import { createUseStyles } from 'react-jss';
import { color, spacing } from '../constant';

export const Divider = () => {
  const classes = useStyles();

  return <div className={classes.divider} />;
};

const useStyles = createUseStyles(
  {
    divider: {
      width: '100%',
      borderBottom: `1px solid ${color.darkBlue}`,
      display: 'flex',
      marginTop: spacing.m,
      marginBottom: spacing.m,
    },
  },
  { name: 'Divider' }
);
