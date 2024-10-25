import { useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { Pokemon, useGetPokemons } from '../../hooks/useGetPokemons';
import { Divider } from '../Common/Divider';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { PokemonData } from '../PokemonData/PokemonData';
import { SearchBox } from '../SearchBox/SearchBox';
import { color } from '../constant';

type PokemonListProps = {
  showModal: boolean;
};

export const PokemonList = ({ showModal = false }: PokemonListProps) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { pokemons, loading, error } = useGetPokemons();
  const [searchText, setSearchText] = useState('');

  const filteredPokemons = useMemo(() => {
    return pokemons.filter((pokemon) => {
      return (
        pokemon.name.toLowerCase().includes(searchText.toLowerCase()) ||
        pokemon.number.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  }, [pokemons, searchText]);

  return (
    <div className={classes.root}>
      {error && <div>Something went wrong</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
         <h2 aria-label="Pokedex title" className={classes.pageHeading}>Pokedex</h2>
          <SearchBox
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <Divider />
          <div className={classes.container}>
            {searchText && <h2 className={classes.searchText}> Search Results </h2>}
            {filteredPokemons.map((pkmn: Pokemon) => (
              <PokemonCard key={pkmn.id} {...pkmn} />
            ))}
          </div>
        </>
      )}
      <Modal
        isOpen={showModal}
        onRequestClose={() => {
          navigate('/pokemon');
        }}
        style={{
          overlay: {
            display: 'flex',
            background: '#000000e6',
          },
        }}
        className={classes.modal}
        contentLabel="Pokemon Data"
      >
        <PokemonData />
      </Modal>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
    },
    modal: {
      display: 'flex',
      alignSelf: 'center',
      margin: 'auto',
    },
    container: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '32px',
    },
    pageHeading: {
      color: color.white,
      fontSize: '40px',
      letterSpacing: '3px',
      marginTop: '5px',
      marginBottom: '0px',
    },
    searchText: {
      color: color.white,
      fontSize: '20px',
      width: '100%',
    }
  },
  { name: 'PokemonList' }
);
