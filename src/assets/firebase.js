import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  production: true,
  apiKey: process.env.API_KEY,
  authDomain: "reactjs-7e838.firebaseapp.com",
  projectId: "reactjs-7e838",
  storageBucket: "reactjs-7e838.appspot.com",
  messagingSenderId: "1001705562762",
  appId: "1:1001705562762:web:5d49188fe401eefb3a4373",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const cargarBDD = async () => {
  const promise = await fetch("./json/products.json");
  const productos = await promise.json();
  productos.forEach(async (prod) => {
    await addDoc(collection(db, "productos"), {
      nombre: prod.nombre,
      linea: prod.linea,
      description: prod.description,
      idCategory: prod.idCategory,
      stock: prod.stock,
      precio: prod.precio,
      img: prod.img,
    });
  });
};

const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info);
  return estado;
};

const deleteProducto = async (id) => {
  const estado = await deleteDoc(doc(db, "productos", id));
  return estado;
};

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"));
  const items = productos.docs.map((prod) => {
    return { ...prod.data(), id: prod.id };
  });
  return items;
};

const getProducto = async (id) => {
  const prod = await getDoc(doc(db, "productos", id));
  let item;
  if (prod.data()) {
    item = { ...prod.data(), id: prod.id };
  } else {
    item = 0;
  }

  return item;
};

const createOrdenCompra = async (cliente, preTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
    nombre: cliente.nombre,
    apellido: cliente.apellido,
    email: cliente.email,
    dni: cliente.dni,
    celular: cliente.celular,
    direccion: cliente.direccion,
    fecha: fecha,
    precioTotal: preTotal,
  });

  return ordenCompra;
};

const getOrdenCompra = async (id) => {
  const item = await getDoc(doc(db, "ordenCompra", id));
  const ordenCompra = { ...item.data(), id: item.id };
  return ordenCompra;
};

export {
  cargarBDD,
  getProducto,
  getProductos,
  createOrdenCompra,
  getOrdenCompra,
  updateProducto,
  deleteProducto,
};
