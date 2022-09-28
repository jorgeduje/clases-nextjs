import { Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavoritesCard } from '../pokemon'

interface Props {
    pokemons: number[];
}

export const FavoritesPokemons: FC<Props> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} direction="row" justify='flex-start'>
    {
      pokemons.map( id =>(
        <FavoritesCard pokemonId={id} key={id}/>
      ))
    }
</Grid.Container>
  )
}
