import React from 'react';
import './App.css';
import Header from './UI/Header/Header';
import BoxComonent from './UI/Box/Box';
import { Grid } from '@mui/material';
import CreateNote from './Component/CreateNote';
import Store, { persistor } from './Store/store';
import { Provider } from 'react-redux';
import Router from './Component/Router';
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={Store}>
         <PersistGate loading={null} persistor={persistor}>
    <div className="App">
      <Header></Header>
    <div className="App-body" style={{top:'100px'}}>
    <Grid container item xs={12} spacing={2}  justifyContent="center"
  alignItems="center">
    <Router/>
    </Grid>
    </div>
    </div>
    </PersistGate>
    </Provider>

  );
}

export default App;
