import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Carrousel from './Components/Carrousel/Carrousel';
import Footer from './Components/Footer/Footer';
import { useAuth0 } from '@auth0/auth0-react';

const React = require('react'); console.log(React.version);


function App() {
  return (
    <HashRouter>
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
