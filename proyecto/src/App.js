import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponent'; 
import './App.css';

function App() {
  return ( 
      <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
  );
}

export default App;
