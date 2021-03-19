import  { Card, Heading, Image, Text } from 'theme-ui';

// TODO add flavor text
// TODO add evolution chain

export interface IPokemonProps {
  id: string;
  name: string;
  image: string;
  types: string[];
}

export const Pokemon: React.FC<IPokemonProps> = ({ name, types, image }) => (
  <Card variant="pokemon">
    <Heading>{ name }</Heading>
    <Image src={ image } />
    { types.map((type) =>(
      <Text variant="caps" key={ type }>{ type }</Text>
    ))}
  </Card>
);
