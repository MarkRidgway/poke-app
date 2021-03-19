import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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

export const PokemonPage: React.FC = () => {
  const { id } = useParams<PokemonPageParams>();
  const [ pokemonData, setPokemonData ] = useState<PokemonDataState | undefined>();
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    axios.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      console.log( response.data.types );
      setPokemonData({
        name: response.data.name,
        types: response.data.types.map( (type) => type.type.name ),
        image: response.data.sprites.front_default
      });

      setLoading(true);

      console.log(pokemonData);
    }).catch(() => setError(true));
  }, [ id ]);

  return (
    <>
      {/* <Text>{ name }</Text> */}
      { loading && pokemonData ? (
        <Pokemon id={ id } name={ pokemonData.name } image={ pokemonData.image } types={ pokemonData.types } />
      ) : null }

      { error ? (
        <Text>There was an error</Text>
      ) : null}
    </>
  );
}
