import React, { useState, useEffect } from "react";
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";
import '../Stylesheets/ListaTareas.css';

// CONEXIÓN BASE DE DATOS FIREBASE
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase-config";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore"; 

function ListaTareas() {

    // PARA CONEXIÓN CON FIREBASE:
    const FIREBASE_CONFIG = firebaseConfig;
    const APP = initializeApp(FIREBASE_CONFIG);
    const DATABASE = getFirestore(APP);
    const COLLECTION = "tareas";

    const [tareas, setTareas] = useState([]);
    const [mensaje, setMensaje] = useState("");
    const [isError, setIsError] = useState(false);

    /**
     * OBTENEMOS DE LA BASE DE DATOS TODAS LAS TAREAS ALMACENADAS:
     */
    useEffect(() => {
        (async () => {
            let listaTareas = [];
            let querySnapshot = await getDocs(collection(DATABASE, COLLECTION));
            querySnapshot.forEach((doc) => {
                listaTareas.push(doc.data());
            });
            setTareas(listaTareas);
        })()
    });

    /**
     * FUNCIÓN PARA AGREGAR TAREA A LA LISTA DE TAREAS:
     * @param {*} tarea CORRESPONDE A LA TAREA QUE SERÁ ALMACENADA EN LA BASE DE DATOS
     */
    const agregarTarea = async (tarea) => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();

            // AÑADIR TAREA EN BASE DE DATOS:
            try {
                await addDoc(collection(DATABASE, COLLECTION), tarea);
                setIsError(false);
                setMensaje("Tarea agregada con éxito");
                setTimeout(() => setMensaje(""), 2000);
              } catch (error) {
                setIsError(true);
                setMensaje("Error añadiendo tarea: ", error);
                setTimeout(() => setMensaje(""), 3000);
              }

            let tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };

    /**
     * FUNCIÓN PARA ELIMINAR UNA TAREA EN BASE A SU ID.
     * @param {*} id CORRESPONDE AL ID DE LA TAREA QUE SERÁ ELIMINADA
     */
    const eliminarTarea = async (id) => {

        // ELIMINAR TAREA EN BASE DE DATOS:
        try {
            let querySnapshot = await getDocs(collection(DATABASE, COLLECTION));
            querySnapshot.forEach(async (docu) => {
                if (docu.data().id === id) {
                    await deleteDoc(doc(DATABASE, COLLECTION, docu.id));
                    setIsError(false);
                    setMensaje("Tarea eliminada con éxito");
                    setTimeout(() => setMensaje(""), 2000);
                }
            });
        } catch (error) {
            setIsError(true);
            setMensaje("Error eliminando tarea: ", error);
            setTimeout(() => setMensaje(""), 3000);
        }

        let tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    /**
     * FUNCIÓN PARA CAMBIAR EL ESTADO "COMPLETADO" DE LA TAREA QUE HAYA SIDO CLICKEADA.
     * @param {*} id CORRESPONDE A LA TAREA CUYO ESTADO "COMPLETADO" CAMBIARÁ
     */
    const completarTarea = async (id) => {
        try {
            // ACTUALIZAR TAREA EN BASE DE DATOS:
            let querySnapshot = await getDocs(collection(DATABASE, COLLECTION));
            querySnapshot.forEach(async (docu) => {
                if (docu.data().id === id) {
                    let tareaRef = doc(DATABASE, COLLECTION, docu.id);
                    let tareaCompletada = docu.data().completada;
                    await updateDoc(tareaRef, {"completada": !tareaCompletada})
                }
            });
            
        } catch (error) {
            setIsError(true);
            setMensaje("Error actualizando tarea: ", error);
            setTimeout(() => setMensaje(""), 3000);
        }

        let tareasActualizadas = tareas.map(tarea => {
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
            <div className={isError ? "mensaje-error error" : "mensaje-error"}>{mensaje}</div>
            <div className="tareas-lista-contenedor">
                { tareas.map((tarea) => <Tarea key={tarea.id} id={tarea.id} texto={tarea.texto} completada={tarea.completada} completarTarea={completarTarea} eliminarTarea={eliminarTarea} />) }
            </div>
        </>
    );
}

export default ListaTareas;