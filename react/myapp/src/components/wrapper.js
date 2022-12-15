import React, { Component } from "react";

class Wrapper extends Component {
    render(){
        return( //todas las etiquetas deben estar dentro de una etiqueta padre o contenedora
            <div>
                <p>Parrafo dentro del Wrapper</p>
            </div>
        );
    }

}
export default Wrapper;