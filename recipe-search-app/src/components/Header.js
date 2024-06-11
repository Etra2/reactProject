import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

//komponent Header odpowiada za renderowanie nagłówka aplikacji
function Header() {
  return (
    //AppBar - komponent Material-UI, reprezentujący pasek aplikacji
    <AppBar position="static">
      {/*Toolbar - komponent Material-UI, zawierający elementy paska narzędzi */}
      <Toolbar>
        {/*Box - komponent Material-UI, służący do grupowania elementów */}
        <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          justifyContent="center" 
          width="100%"
        >
          {/*Typography - komponent Material-UI, reprezentujący tekst */}
          <Typography variant="h4" component="div" gutterBottom>
            Recipe Finder
          </Typography>
          <Typography variant="subtitle1" component="div">
            {/*tekst informacyjny dla użytkownika */}
            Search for your own recipe by entering your search keyword
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
