import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Popular from '../src/pages/Popular'
import InTheatre from '../src/pages/InTheatre'
import Drama from '../src/pages/Drama'
import Kids from '../src/pages/Kids'
import Comedy from '../src/pages/Comedy'
import Cart from '../src/pages/Cart'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>

      <Routes>
        <Route path='/' element={<Popular />} />
        <Route path='/theatre' element={<InTheatre />} />
        <Route path='/drama' element={<Drama />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/comedy' element={<Comedy />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
