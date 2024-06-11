import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, Button, Typography, Link,
  Table, TableBody, TableCell, TableContainer, TableRow, IconButton, Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

//komponent RecipeDetails przyjmuje propsy open, onClose i recipe
function RecipeDetails({ open, onClose, recipe }) {
  const handleSaveRecipe = () => {
    //logika zapisywania przepisu
    console.log('Zapisano przepis:', recipe.label);
  };

  return (
    //dialog wyświetlający szczegóły przepisu
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="flex-end">
          <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="center">
          <img src={recipe.image} alt={recipe.label} style={{ width: '200px', height: '200px', marginRight: '20px' }} />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <Typography variant="h5" style={{ textTransform: 'uppercase' }}>
              {recipe.label}
            </Typography>
            <Typography variant="body2">
              <Link href={recipe.url} target="_blank" rel="noopener noreferrer">
                See full recipe on: {recipe.source}
              </Link>
            </Typography>
          </div>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">Ingredients:</Typography>
        <ul>
          {recipe.ingredientLines.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <Button variant="outlined" onClick={handleSaveRecipe} style={{ marginBottom: '10px' }}>
          Save Recipe
        </Button>
        <Typography variant="h6">Instructions:</Typography>
        <Typography variant="body1" gutterBottom>
          {recipe.source} <Link href={recipe.url} target="_blank" rel="noopener noreferrer">Instructions</Link>
        </Typography>
        <Typography variant="h6">Nutritional Information:</Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Calories</TableCell>
                <TableCell>Fat</TableCell>
                <TableCell>Saturates</TableCell>
                <TableCell>Carbs</TableCell>
                <TableCell>Sugars</TableCell>
                <TableCell>Fibre</TableCell>
                <TableCell>Protein</TableCell>
                <TableCell>Salt</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe.calories.toFixed(0)}</TableCell>
                <TableCell>{recipe.totalNutrients.FAT.quantity.toFixed(1)}g</TableCell>
                <TableCell>{recipe.totalNutrients.FASAT.quantity.toFixed(1)}g</TableCell>
                <TableCell>{recipe.totalNutrients.CHOCDF.quantity.toFixed(1)}g</TableCell>
                <TableCell>{recipe.totalNutrients.SUGAR.quantity.toFixed(1)}g</TableCell>
                <TableCell>{recipe.totalNutrients.FIBTG.quantity.toFixed(1)}g</TableCell>
                <TableCell>{recipe.totalNutrients.PROCNT.quantity.toFixed(1)}g</TableCell>
                <TableCell>{recipe.totalNutrients.NA.quantity.toFixed(1)}g</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
}

export default RecipeDetails;