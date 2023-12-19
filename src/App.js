import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useContext,useState } from 'react';
import './App.css';
import { Navbar } from './components/NavBar';
import {HomePage} from './components/Home'

const MyContext = createContext()

function App() {

  const [cityNameState, setCityNameState] = useState('')

  return (
    <div>
      <BrowserRouter>
      <MyContext.Provider value ={{cityNameState, setCityNameState}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </div>
  );
}



export const useMyContext =()=>{

  return useContext(MyContext)
}

export default App;