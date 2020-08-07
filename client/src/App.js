import React from 'react';
import {BrowserRouter} from "react-router-dom"
import Content from './components/Content/Content';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Content/>
      </div>
    </BrowserRouter>
  );
}

export default App;
