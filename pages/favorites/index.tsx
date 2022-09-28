import React from 'react'
import { Layout } from '../../components/layouts'
import { FavoritesPokemons, NoFavorites } from '../../components/ui'
import { useState, useEffect } from 'react';
import { localFavorites } from '../../utils';
import { Card, Grid } from '@nextui-org/react';

const FavoritesPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect( ()=>{

    setFavoritesPokemons( localFavorites.pokemons() )

  },[] )



  return (
    <Layout title='favoritos'>

      {
        favoritesPokemons.length === 0
        ? <NoFavorites /> 
        : <FavoritesPokemons pokemons={favoritesPokemons}/>
      }

    </Layout>
  )
}

export default FavoritesPage