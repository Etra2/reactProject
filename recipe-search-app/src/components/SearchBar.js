import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

//komponent SearchBar odpowiada za renderowanie paska wyszukiwania
function SearchBar({ onSearch }) {
  //stan przechowujący wprowadzoną frazę wyszukiwania
  const [query, setQuery] = useState('');

  //funkcja obsługująca wyszukiwanie po kliknięciu przycisku lub naciśnięciu Enter
  const handleSearch = () => {
    if (query.trim() !== '') {
      onSearch(query.trim());
    }
  };

  //funkcja obsługująca naciśnięcie klawisza Enter podczas wprowadzania frazy
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/*TextField - pole tekstowe Material-UI, służące do wprowadzania frazy wyszukiwania */}
      <TextField
        fullWidth
        variant="outlined"
        label="Search for recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {/*IconButton - przycisk Material-UI z ikoną, służący do uruchomienia wyszukiwania */}
      <IconButton onClick={handleSearch}>
        {/*Ikona lupy, symbolizująca akcję wyszukiwania */}
        <SearchIcon />
      </IconButton>
    </div>
  );
}

export default SearchBar;

