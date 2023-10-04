import React, { useState, useEffect } from "react";
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";

import '../Stylesheets/ListaTareas.css';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../firebase-config";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore"; 


function ListaTareas() {

    const fireConfig = firebaseConfig;

    const app = initializeApp(fireConfig);
    const db = getFirestore(app);

    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        ;(async () => {
            const listaTareas = [];
            const querySnapshot = await getDocs(collection(db, "tareas"));
            querySnapshot.forEach((doc) => {
                listaTareas.push(doc.data());
            });

            setTareas(listaTareas);
        })()
    }, [])

    const agregarTarea = async (tarea) => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            console.log("agregada ", tareasActualizadas);
            setTareas(tareasActualizadas);

            // FIREBASE:
            try {
                const docRef = await addDoc(collection(db, "tareas"), tarea);
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }
    };

    const eliminarTarea = async (id) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);

        const querySnapshot = await getDocs(collection(db, "tareas"));

        querySnapshot.forEach(async (docu) => {
            if (docu.data().id === id) {
                await deleteDoc(doc(db, "tareas", docu.id));
            }
        });
    };

    const completarTarea = async (id) => {
        const querySnapshot = await getDocs(collection(db, "tareas"));

        querySnapshot.forEach(async (docu) => {
            if (docu.data().id === id) {
                const tareaRef = doc(db, 'tareas', docu.id);
                const tareaCompletada = docu.data().completada;
                await updateDoc(tareaRef, {"completada": !tareaCompletada})
            }
        });

        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    };

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea}/>
            <div className="tareas-lista-contenedor">
                { tareas.map((tarea) => <Tarea key={tarea.id} id={tarea.id} texto={tarea.texto} completada={tarea.completada} completarTarea={completarTarea} eliminarTarea={eliminarTarea} />) }
            </div>
        </>
    );
}

export default ListaTareas;