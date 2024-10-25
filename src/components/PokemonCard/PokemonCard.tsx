import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../../hooks/useGetPokemons';
import { Divider } from '../Common/Divider';
import { color, fontSize, spacing } from '../constant';

export const PokemonCard = ({ id, name, image, types, number }: Pokemon) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div
      className={classes.card}
      onClick={() => navigate(`/pokemon/${id}/${name}`)}
    >
      <img className={classes.image} src={image} alt={name} />
      <div className={classes.dataContainer}>
        <div className={classes.row}>
          <div className={classes.name}>{number}</div>
          <div className={classes.name}>{name}</div>
        </div>
        <Divider />
        <div className={classes.types}>
          {types.map((type: string) => {
            return (
              <div key={type} className={classes.type}>
                {type}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    card: {
      width: '380px',
      boxSizing: 'border-box',
      borderRadius: spacing.s,
      display: 'flex',
      padding: spacing.s,
      background: color.cardBackgroundColor,
      boxShadow: `0 8px 32px 0 ${color.boxShadow}`,
      backdropFilter: 'blur(1px)',
      border: `1px solid ${color.darkBlue}`,
      '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.05)',
        transition: 'all 0.5s',
      },
    },
    image: {
      width: '140px',
      aspectRatio: 1,
      borderRadius: '5px'
    },
    dataContainer: {
      marginLeft: spacing.m,
      borderLeft: `1px solid ${color.darkBlue}`,
      width: '100%',
      padding: spacing.l,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    name: {
      fontSize: fontSize.l,
      textAlign: 'center',
      color: color.white,
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    type: {
      border: `1px solid ${color.darkBlue}`,
      borderRadius: spacing.s,
      padding: spacing.s,
      color: color.white,
      fontSize: fontSize.m,
    },
    types: {
      display: 'flex',
      gap: spacing.s,
    },
  },
  { name: 'PokemonCard' }
);
