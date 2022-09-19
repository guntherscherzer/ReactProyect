
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainers from './components/ItemListContainres';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainers greeting={"Welcome to PokeShop"}></ItemListContainers>
    </div>
  );
}

export default App;
