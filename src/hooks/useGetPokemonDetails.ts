import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useMemo } from 'react';

export type PokemonDetails = {
  id: string;
  number: string;
  name: string;
  weight: Weight;
  height: Height;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
}

type Weight = {
  minimum: string;
  maximum: string;
}
type Height = {
  minimum: string;
  maximum: string;
}

export const GET_POKEMON = gql`
query pokemon($id: String, $name: String) {
  pokemon(id: $id, name: $name) {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
}
`;


export const useGetPokemonDetails = (id: string, name: string) => {
  const { data, ...queryRes } = useQuery(GET_POKEMON, {
    variables: {
      id,
      name,
    },
  });

  const pokemon: PokemonDetails = useMemo(() => data?.pokemon || null, [data]);

  return {
    pokemon,
    ...queryRes,
  };

};
