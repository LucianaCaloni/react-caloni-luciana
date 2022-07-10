// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, collection, getDoc, doc, where, query, setDoc, addDoc, Timestamp} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyB2ZCgXoQ02QQBlwg2EV5q4YVnVUrs2BlI",
  authDomain: "tienda-para-gatos.firebaseapp.com",
  projectId: "tienda-para-gatos",
  storageBucket: "tienda-para-gatos.appspot.com",
  messagingSenderId: "603886630814",
  appId: "1:603886630814:web:f8530a607831aec04cc88f"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);


export async function getProduct(){
  const itemsCollection = collection(appFirestore, "catItems");

  const itemsSnapshot = await getDocs(itemsCollection);
  let respuesta = itemsSnapshot.docs.map(doc => {
    return {
      ...doc.data(),
      id : doc.id
    }
  })
    

  //asyn await/ solo quiero que espere que el gedocs se cumpla, la promesa esta
  //en getdocs/
  return respuesta;

}
//id desafio//
export async function traerUnProducto(id){
  

  const docRef=doc( appFirestore, "catItems", id);
  const docSnapshot =  await getDoc(docRef);
 

  return{
    id : docSnapshot.id, ...docSnapshot.data()

  };


}

export async function getFromCategory(categoryId){
  //Query ====> WHERE

  const itemsCollection = collection(appFirestore, "catItems")
  const q = query(itemsCollection, where("category", "==", categoryId));
  const hamacasSnapshot = await getDocs(q);
  let respuesta = hamacasSnapshot.docs.map( doc =>{
    return{
      ...doc.data(),
      id : doc.id
    }
  })
  return respuesta
}

export  async function dataToFirestore (){
  const products = [
    {
      id: 1,
      name: "Puerta para gatos de plastico reforzada",
      price: 2800,
      stock: 10,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1655100450/otros%20gato/x_ejemplopuertagatogrande09098240_dzrdd2.jpg",
      category: "puertas",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
  
    {
      id: 2,
      name: "Puerta para gatos2 de plastico bordes de metal",
      price: 2400,
      stock: 5,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1655100450/otros%20gato/puerta-830x830_w4hzhb.jpg",
      category: "puertas",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
    {
      id: 3,
      name: "Puerta para gatos con forma de gato",
      price: 2600,
      stock: 3,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1655100449/otros%20gato/81ZMHpf2BmL._AC_SX466__tnontd.jpg",
      category: "puertas",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
    {
      id: 4,
      name: "Hamaca para la ventana modelo con sopapa",
      price: 1200,
      stock: 6,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1655100450/otros%20gato/Hamaca-con-ventosas-para-gato-cama-colgante-montada-en-el-asiento-percha-para-ventana-sof-ventana.jpg_Q90.jpg__sshosg.webp",
      category: "hamaca",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
    {
      id: 5,
      name: "Hamaca para la ventana con sopapa y almohadon",
      price: 2000,
      stock: 2,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1655100449/otros%20gato/hamaca-para-ventana-ventosas-para-gatos-mta-12743_zrwv24.jpg",
      category: "hamaca",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
    {
      id: 6,
      name: "Hamaca para la ventana con sopapa Nemo",
      price: 3000,
      stock: 1,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1657290715/otros%20gato/hamaca_nemo_f5ide3.jpg",
      category: "hamaca",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
    {
      id: 7,
      name: "Arenero para gatos redondo grande",
      price: 3700,
      stock: 3,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1657291492/otros%20gato/arenero3_zkbljn.jpg",
      category: "arenero",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
    {
      id: 8,
      name: "Arenero para gatos con techo",
      price: 3400,
      stock: 2,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1657291137/otros%20gato/arenero1_ra3x9i.jpg",
      category: "arenero",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
    {
      id: 9,
      name: "Arenero para gatos grande con entrada por arriba",
      price: 3800,
      stock: 10,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1657291137/otros%20gato/arenero2_wwvqsu.jpg",
      category: "arenero",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
    {
      id: 10,
      name: "Rascador gato con forma de gato de cartón",
      price: 1000,
      stock: 10,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1657291138/otros%20gato/rascador1_snblxb.jpg",
      category: "misc",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
    {
      id: 11,
      name: "Rascador gato tipo torre chico",
      price: 1300,
      stock: 7,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1657291138/otros%20gato/rascador2_b8q7ks.jpg",
      category: "misc",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
    {
      id: 12,
      name: "Rascador tipo gimnasio",
      price: 2000,
      stock: 4,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1657291137/otros%20gato/juguetes1_vizxeq.jpg",
      category: "misc",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
    {
      id: 13,
      name: "Juguete para gatos laucha",
      price: 800,
      stock: 8,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1657291137/otros%20gato/jueguetes2_p68tx5.jpg",
      category: "misc",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
    {
      id: 14,
      name: "Torre para gatos pequeños de 1 piso",
      price: 1200,
      stock: 10,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1657290737/otros%20gato/torre1_u6viep.jpg",
      category: "torre",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
    {
      id: 15,
      name: "Torre para gatos grandes de 2 pisos mas una cama extra",
      price: 2000,
      stock: 5,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1657290757/otros%20gato/torre3_h5bki0.jpg",
      category: "torre",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
    {
      id: 16,
      name: "Torre para gatos grandes de 3 pisos",
      price: 2200,
      stock: 2,
      img: "https://res.cloudinary.com/di9ergurx/image/upload/v1657292476/otros%20gato/torres3_dsc7c7.jpg",
      category: "torre",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.",
    },
  ];
  const itemsCollection = collection(appFirestore, "catItems");
  products.forEach(items =>{
    const newDoc = doc(itemsCollection);
    setDoc(newDoc, items).then( res =>{
      console.log("doc guardado", newDoc.id)
    })
    .catch(
      (error => console.log("error obtiendo datos"))
    )

  })
  
}

export async function buyOrder (dataOrder){
  const orderCollectionRef = collection (appFirestore, "orders");
  const dateTimeStamp = Timestamp.now();
  
  const dataOrderDate =  {
    buyer: dataOrder.buyer,
    items : dataOrder.items,
    total: dataOrder.total,
    date : dateTimeStamp

  };
  console.log(">>", dataOrderDate);
  const orderCreated= await addDoc (orderCollectionRef, dataOrderDate );
  
  return orderCreated;
  

}

export default appFirebase;