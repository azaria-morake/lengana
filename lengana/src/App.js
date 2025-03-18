// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';
import ItemGrid from './components/ItemGrid/ItemGrid';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Headline />
      <ItemGrid />
    </>
  );
}

export default App;
