
import "./ItemListContainer.css";
import ItemCount from "./ItemCount/ItemCount";

export default function ItemListContainer(props) {
  return (
    <div className="container">
      <p>{props.gretting}</p>
      <ItemCount stock={5} initial={1}/>
    </div>
  );
}
