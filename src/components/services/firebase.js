// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, collection, getDoc, doc, where, query} from "firebase/firestore"


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
  const hamacasCollection = collection(appFirestore, "hamacas");

  const hamacasSnapshot = await getDocs(hamacasCollection);
  let respuesta = hamacasSnapshot.docs.map(doc => {
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
  

  const docRef=doc( appFirestore, "hamacas", id);
  const docSnapshot =  await getDoc(docRef);
 

  return{
    id : docSnapshot.id, ...docSnapshot.data()

  };


}

export async function getFromCategory(categoryId){
  //Query ====> WHERE

  const hamacasCollection = collection(appFirestore, "hamacas")
  const q = query(hamacasCollection, where("category", "==", categoryId));
  const hamacasSnapshot = await getDocs(q);
  let respuesta = hamacasSnapshot.docs.map( doc =>{
    return{
      ...doc.data(),
      id : doc.id
    }
  })
  return respuesta
}

export default appFirebase;