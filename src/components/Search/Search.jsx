import React, { useState } from 'react'
import { styled ,alpha} from '@mui/material/styles';
import { Box, TextField, Typography } from '@mui/material';



const SearchC = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.2),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));




const Search = ({setHeroeName}) => {

  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e)=>{
    setInputValue(e.target.value);

}
  

const handleSubmit =(e)=>{
  e.preventDefault()
  console.log(inputValue);
  setHeroeName( inputValue);
  setInputValue("")

}
  return (
    <Box 
    m={4}
    sx={{ width: { xs: '80%', sm: '40%' } }}
    >
      <Typography
            variant="h5"
            noWrap
            component="div"
            mb={3}
            // sx={{ display: { xs: 'none', sm: 'block' } }}
          >
           Selecciona tu personaje de Marvel
          </Typography>
    <form onSubmit={handleSubmit}>
    <SearchC>
    
    <TextField
          sx={{ width: { xs: '80%', sm: '100%' } }}
          id="standard-search"
          label="Search"
          type="search"
          variant="standard"
          value={inputValue}
          onChange={handleInputChange}
        />

  </SearchC>
  </form>
  </Box>
  )
}

export default Search