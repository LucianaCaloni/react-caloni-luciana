import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
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
        {/* Si oculto este listcontainer me oculta las fotos */}
        {/* <ItemListContainer gretting="Bienvenidos a la tienda" /> */}
        {/* //clase6 desafio detalle// */}
        <ItemDetailContainer gretting= "Detalle del producto"/>
      </header>
    </div>
  );
}

export default App;
