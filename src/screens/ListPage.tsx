import { createUseStyles } from 'react-jss';
import { PokemonList } from '../components';
import { color } from '../components/constant';

interface ListPageProps {
  showModal: boolean;
};

export const ListPage = ({ showModal = false }: ListPageProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PokemonList showModal={showModal} />
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      height: '100%',
    }
  },
  { name: 'ListPage' }
);
