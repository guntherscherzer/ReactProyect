import { BrowserRouter,Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer ruta={"./"}/>}/>
        <Route exact path="/category/:id" element={<ItemListContainer ruta={"../"}/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
