import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  Button, CardActionArea, CardActions } from '@mui/material';



const CardProduct=(props)=> {
 
  const{image,name,selected,character}=props

  const urlInfo=`${character.urls[0].url}`
  console.log(urlInfo);
  
  return (
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={image}
          alt="..."
          onClick={()=>selected(character)}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          
        </CardContent>
        
      </CardActionArea>
      <CardActions>
    
        <Button size="large" color="primary" href={urlInfo} target="_blank" rel="noopener noreferrer">
          Share
      </Button>
      </CardActions>
      
    </Card>
  );
}

export default  CardProduct