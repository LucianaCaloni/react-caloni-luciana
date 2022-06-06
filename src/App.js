import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  const h1Style = {
    color: "pink",
    display: "flex",
    justifyContent: "center",
  };
  //los componentes siempre con mayusc inicial
  //importamos ItemListContainer y lo renderizmaos
  //dentro de NavBAr importamos y mostramos CartWidget
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

        <h1 style={h1Style}>Tienda productos para gatos</h1>
        <ItemListContainer gretting="Bienvenidos a la tienda" />
      </header>
    </div>
  );
}

export default App;
