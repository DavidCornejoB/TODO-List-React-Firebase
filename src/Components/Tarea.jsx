import React from "react";
import { MdDeleteForever } from 'react-icons/md';
import '../Stylesheets/Tarea.css'

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    console.log(completada);
    return (
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div className="tarea-texto" onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className="tarea-contenedor-iconos" onClick={() => eliminarTarea(id)}>
                <MdDeleteForever className="tarea-icono"/>
            </div>
        </div>
    );
}

export default Tarea;