//los componentes tienen que ir con PascalCase//
//exportrlo
//iportarlo en app
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";


export default function NavBar (){
    const navStyle={
    color: "violet",   
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-around",
    fontSize: "1.5rem",
    backgroundColor: "yellow"
    
    }
  
    return (
        
        <nav className="navPrincipal">
            <ul className="navList" style={navStyle}>
                <li>
                    Sobre nosotros
                </li>
                <li>
                    Productos
                </li>
                <li>
                    Ofertas
                </li>
                <CartWidget/>
            </ul>
        </nav>
        
    );
}
 