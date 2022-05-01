
import { Box, Grid } from '@mui/material'
import React, {  useState } from 'react'
import { UseFetch } from '../../CustomHooks/UseFetch'
import CardProduct from '../CardProduct/CardProduct'
import HeroeTeam from '../HeroeTeam/HeroeTeam'
import Search from '../Search/Search'




const CardContainer = () => {

 

  const [heroeName,setHeroeName]=useState(null)
  
  const [selectedTeam ,setSelectedTeam] =useState("")

const URLname=`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${heroeName}&limit=5&apikey=a6ce90178defdee58938a19908a7c5f3`
const {data} =UseFetch(URLname)

const selected = ( character)=>{
  setSelectedTeam( character)
}
  

  return (


    
    <Box 
    mx={2}
    p={5}
   
    >
    <Grid container  >
    <Grid item xs={12} md={12}>
    <Search setHeroeName={setHeroeName}/>
    </Grid>
    <Grid item xs={12} md={8}>
      <HeroeTeam selectedTeam={selectedTeam} />
    </Grid>
    
        {
            data && data.map(product =>
                <Grid 
                key={product.id}
                > 
                <Box
                m={1}
                p={1}
               ><CardProduct
                    character={product}
                    image={`${product.thumbnail.path}.${product.thumbnail.extension}`} 
                    name={product.name}
                    selected={selected}
                />
                </Box>
                </Grid>
            )
        }
    </Grid>
    </Box>
 
  
  )
}

export default CardContainer