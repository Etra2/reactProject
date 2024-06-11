import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

//komponent RecipeCard przyjmuje propsy recipe i onClick
function RecipeCard({ recipe, onClick }) {
  return (
    <Card onClick={onClick} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardActionArea style={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          style={{ height: 'auto' }}
          image={recipe.image}
          alt={recipe.label}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {recipe.label}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Source: {recipe.source}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default RecipeCard;