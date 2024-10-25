import { createUseStyles } from 'react-jss';
import { color, fontSize, spacing } from '../constant';

type SearchBoxProps = {
  value: string;
  onChange: (e: any) => void;
};
export const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  const classes = useStyles();

  return (
    <div className={classes.inputContainer}>
      <input
        type="text"
        placeholder="Type to Search Pokemon..."
        className={classes.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const useStyles = createUseStyles(
  {
    inputContainer: {
      width: '500px',
      boxSizing: 'border-box',
      borderRadius: spacing.s,
      overflow: 'hidden',
      border: `1px solid ${color.darkBlue}`,
      boxShadow: `0 8px 32px 0 ${color.boxShadow}`,
      display: 'flex',
      height: '50px',
    },
    input: {
      padding: `0 ${spacing.m}`,
      color: color.darkBlue,
      width: '100%',
      height: '48px',
      border: 'none',
      outline: 'none',
      fontSize: fontSize.l,
    },
  },
  { name: 'SearchBox' }
);
