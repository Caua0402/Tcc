import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Cadastro } from './pages/Cadastro/Cadastro';



function App() {
  return (
  <>
   <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/login' element={<>login</>} />
            <Route path='/dashboard' element={<>dashboar</>} />
          </Routes>
        </BrowserRouter>
  </>
  );  
}

export default App;
