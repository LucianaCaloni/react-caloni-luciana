import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  const h1Style= {
    color: "pink",
    display: "flex",
    justifyContent:"center",
};
  return (
    <div className="App">
      <header className="App-header">
        

        <NavBar />

        
        <h1 style={h1Style}>Tienda productos para gatos</h1>
        

      </header>
    </div>
  );
}

export default App;
