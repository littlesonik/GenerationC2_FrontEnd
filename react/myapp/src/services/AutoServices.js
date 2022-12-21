//axios: libreria encargada de hacer las peticiones
import axios from "axios";

//establecer la ruta por default
const rutaBase = "http://localhost:8081/api2";

// funcion de llamado
const getAllAutos = async()=>{
    //axios.get: peticion de tipo GET
    const respuesta = await axios.get(rutaBase+"/autos/getall");
    console.log(respuesta.data);
    return respuesta.data;
}

const getAuto = async(id)=>{
    const respuesta = await axios.get(rutaBase+"/obtener/auto/"+id);
    console.log(respuesta.data);
    return respuesta.data;
}

const eliminarAuto = async(id)=>{
    //eliminarAuto(1)
    //peticion con valores en path
    const respuesta = await axios.post(rutaBase+"/eliminar/auto?id="+id);
    //axios.post(http://localhost:8081/api/eliminar/1)
    console.log("llamando al metodo")
    return respuesta.data;
}

const guardarAuto = async(auto)=>{
    //peticion con valor desde body
    const res = await axios.post(rutaBase+"/guardar/auto", auto);
    return res.data;
}


export {getAllAutos, getAuto, eliminarAuto, guardarAuto};