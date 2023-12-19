import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import { Navbar } from './components/NavBar';
import {HomePage} from './components/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
