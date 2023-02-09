import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Carrousel from './Components/Carrousel/Carrousel';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
