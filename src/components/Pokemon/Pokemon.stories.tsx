import * as React from 'react';
import { Meta, Story, ArgTypes } from '@storybook/react/types-6-0';
import { ThemeProvider, Box } from 'theme-ui';

import { theme } from '../../theme/theme';

import { Pokemon as PokemonComponent, IPokemonProps } from './Pokemon';

export default {
  title: 'Components/Pokemon',
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <ThemeProvider theme={ theme }>
        {storyFn()}
      </ThemeProvider>
    ),
  ],
} as Meta;

interface IPokemonTemplateProps {
  name: string;
}

const myPokemon: IPokemonProps = {
  name: "Pikachu",
  id: "25",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  types: [
    "electric"
  ]
}

const PokemonTemplate: Story<IPokemonTemplateProps> = (props) => (
  <Box p="10px" sx={ { maxWidth: '500px'  } }>
    <PokemonComponent { ...myPokemon } { ...props } />
  </Box>
);

export const Pokemon = PokemonTemplate.bind({});

Pokemon.argTypes = {
  name: {
    defaultValue: 'Pikachu',
    control: {
      type: 'text',
    },
  },
} as ArgTypes;
