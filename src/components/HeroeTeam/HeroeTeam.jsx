import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea } from '@mui/material';

const HeroeTeam = ({selectedTeam}) => {

    console.log(selectedTeam);
  return (
    <Box 
      mx={2}
      p={5}
     
      >
          {
    selectedTeam&&
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          image={`${selectedTeam.thumbnail.path}.${selectedTeam.thumbnail.extension}`}
          alt="..."
        />
        </CardActionArea>
        </Card>
}
        </Box>
  )
}

export default HeroeTeam