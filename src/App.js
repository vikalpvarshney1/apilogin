import React from 'react';
import './App.css';
import { LogIn } from './Components/Login';
// import { LogIn } from './Components/LogIn';
import { Navbar } from './Components/Navbar';
import Products from './Components/Products';
import TokenData from './Components/TokenData';
import { AuthContext } from './Contexts/AuthContext';

function App() {
  const { isAuth } = React.useContext(AuthContext)
  return (
    <div className="App">
      <Navbar />
      {
        isAuth ?
          <Products/> :
          <LogIn />
      }
    </div>
  );
}

export default App;