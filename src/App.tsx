import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
