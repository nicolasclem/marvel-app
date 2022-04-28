import { Container, Grid } from '@mui/material'
import React from 'react'
import { UseFetch } from '../../CustomHooks/UseFetch'
import CardProduct from '../CardProduct/CardProduct'

const CardContainer = () => {

    const URLGral='https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=a6ce90178defdee58938a19908a7c5f3&hash=7c3ffd9612254c72117ab8cd84adc9c5'
   const {data}=UseFetch(URLGral) 
  return (
    <Container 
  
    justify="center">
    <Grid container  
   
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
            data && data.map(product =>
                <CardProduct
                    image={`${product.thumbnail.path}.${product.thumbnail.extension}`} 
                    name={product.name}
                />
            )
        }
    </Grid>
    </Container>
  )
}

export default CardContainer