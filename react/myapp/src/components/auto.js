import React, {useState, useEffect} from 'react';
import {getAllAutos, eliminarAuto} from '../services/AutoServices'

//creacion e inicialización de un objeto
const autosInicial = [
    {
        id: "",
        marca: "",
        color: "",
        usuario: {}
    }
];

//creacion de la estructura de la función
const AutoComponent = () =>{

    const [autos, setAutos] = useState(autosInicial); //a esta variable le asignamos el valor inicial (autosInicial), que tiene datos vacíos

    const obtenerAutos = async() =>{
        setAutos(await getAllAutos());
    }

    const eliminaAuto=async(autoId)=>{
        console.log("eliminando auto")
        await eliminarAuto(autoId)
        setAutos(await getAllAutos())
    }

    //useEffect: ejecuta una funcion según el momento de ciclo de vida
    useEffect(
        ()=>{obtenerAutos()}, []
    );

    
    return(
        <>
            <h1>respuesta de la api: </h1>
                {
                //investigar el uso de map en react y 
                //traspaso de objeto a un componente e imprimir en la pagina
                autos.map(auto => 
                    <div className="card" key={auto.id}>
                        <div className="card-body">
                            <h5 className="card-title">{auto.marca}</h5>
                            <p className="card-text">{auto.id} {auto.color}</p>
                            <hr/>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-outline-primary me-2" >Editar</button>
                                <button className="btn btn-sm btn-outline-danger" onClick={() => eliminaAuto(auto.id)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                )
                }
        </>
    );
}

export default AutoComponent;