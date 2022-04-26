import React from 'react';
import {Header} from "./components";
import BaseRoutes from './Routes';


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <BaseRoutes/>
      </main>
    </div>
  );
}

export default App;
