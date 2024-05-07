import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import CustomerData from './components/CustomerData';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div>
      <Navbar data={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
      <CustomerData/>
    </div>
  );
}

export default App;
