import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Text } from 'theme-ui';

import { Pokemon } from '../components/Pokemon';

interface PokemonPageParams {
  id: string;
}

interface PokemonDataState {
  name: string;
  image: string;
  types: string[];
}

interface PokemonResponse {
  sprites: {
    front_default: string;
  }
  types: {
    type: {
      name: string;
      url: string;
    }
  }[];
  name: string;
  height: number;
  weight: number;
}

export const PokemonWithReactQuery: React.FC = () => {
  const { id } = useParams<PokemonPageParams>();

  const pokemonQuery = () => axios.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.data);

  const { isLoading, data, isError } = useQuery<PokemonResponse>('pokemon', pokemonQuery);

  if(isLoading) {
    return (
      <Text>loading...</Text>
    )
  }

  if(isError) {
    return (
      <Text>There was an error</Text>
    )
  }

  return  data ? (
    <Pokemon id={ id } name={ data?.name } image={ data?.sprites.front_default } types={ data?.types.map((type) => type.type.name) } />
  )
  : null
}
