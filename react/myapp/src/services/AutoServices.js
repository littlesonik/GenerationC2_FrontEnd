//axios: libreria encargada de hacer las peticiones
import axios from "axios";

//establecer la ruta por default
const rutaBase = "http://localhost:8081/api2/";

// funcion de llamado
const getAllAutos = async()=>{
    //axios.get: peticion de tipo GET
    const respuesta = await axios.get(rutaBase+ "autos/getall");
    console.log(respuesta.data);
    return respuesta.data;
}