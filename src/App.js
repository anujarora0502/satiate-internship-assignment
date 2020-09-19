import React from 'react'

import './App.css';
import NavBar from "./components/NavBar";
import Grids from './components/Grids';
import Form from "./components/Form";

function App() {
  return (
     <React.Fragment>
      <NavBar />
      <Grids />
      <Form />
      </React.Fragment>
      );
}

export default App;
