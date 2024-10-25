import { createUseStyles } from 'react-jss';
import { useParams } from 'react-router-dom';
import {
  PokemonDetails,
  useGetPokemonDetails,
} from '../../hooks/useGetPokemonDetails';
import { color, spacing } from '../constant';

export const PokemonData = () => {
  const { id = '', name = '' } = useParams();
  const { pokemon, loading, error } = useGetPokemonDetails(id, name);
  const classes = useStyles();

  return (
    <>
      {loading && 'loading...'}
      {error && <div>Something went wrong</div>}
      {pokemon && (
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <img
              className={classes.image}
              src={pokemon.image}
              alt={pokemon.name}
            />
          </div>
          <div className={classes.dataContainer}>
            <PokemonDetailsTable {...pokemon} />
          </div>
        </div>
      )}
    </>
  );
};
const PokemonDetailsTable = (pokemon: PokemonDetails) => {
  const {
    id,
    name,
    number,
    classification,
    types,
    resistant,
    weaknesses,
    fleeRate,
    maxCP,
    maxHP,
    weight: { minimum: minimumWeight, maximum: maximumWeight },
    height: { minimum: minimumHeight, maximum: maximumHeight },
  } = pokemon;
  const classes = useStyles();

  return (
    <table className={classes.table}>
      <tbody>
        {[
          { label: 'Number', value: number },
          { label: 'Name', value: name },
          { label: 'Id', value: id },
          { label: 'Classification', value: classification },
          { label: 'Types', value: types.join(', ') },
          { label: 'Resistant', value: resistant.join(', ') },
          { label: 'Weaknesses', value: weaknesses.join(', ') },
          { label: 'Flee Rate', value: fleeRate },
          { label: 'Max CP', value: maxCP },
          { label: 'Max HP', value: maxHP },
          { label: 'Minim Height', value: minimumHeight },
          { label: 'Maxi Height', value: maximumHeight },
          { label: 'Min Weight', value: minimumWeight },
          { label: 'Max Weight', value: maximumWeight },
        ].map(({ value, label }) => {
          return (
            <tr key={value + label}>
              <td className={classes.text}>{label}</td>
              <td className={classes.text}>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const useStyles = createUseStyles(
  {
    container: {
      width: '750px',
      padding: spacing.l,
      display: 'flex',
      border: `1px solid ${color.darkBlue}`,
      background: color.white,
      borderRadius: '200px',
    },
    imageContainer: {
      width: '200px',
      display: 'flex',
      alignItems: 'center',
      padding: `0 ${spacing.l}`,
      height: '100%',
    },
    image: {
      width: '100%',
      aspectRatio: 'auto',
    },
    dataContainer: {
      width: '550px',
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      padding: `0 ${spacing.l}`,
    },
    table: {
      width: '100%',
      padding: spacing.l,
    },
    text: {
      color: color.darkBlue,
    },
  },
  {
    name: 'PokemonData',
  }
);
