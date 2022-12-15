import React, {Component} from 'react';

class Ejemplo extends Component{
//Eventos sintéticos:
    //onClick(), onBlur() y onChange()

//STATE: es el estado inicial de una variable
    constructor(props){ //el constructor recibe los props
        super(props); //le pasamos los props a la super clase
        this.state ={ //con state manejamos el estado de nuestras variables internas del componente
                      //el valor iniciales de las variables en el STATE son inmutables, no se les puede cambiar directamente el valor
            encendido: "on",
            sumando: 0
        }
    }

    cambiarEstado = () =>{
        //realizar el cambio con set
        //alert("Click en botón 2");
        if(this.state.encendido === "on"){ //"===" es una equivalencia, los datos comparados deben ser estrictamente iguales, no solo en valor, sino en el tipo de valor. 
            this.setState({
                encendido: "off"
            })
        }else{
        this.setState({
            encendido: "on"
        }); //la forma de cambiar el valor de la variable es con .setState
        }
    }

    sumarNumero = () =>{
            let numero = this.state.sumando +1
            this.setState({
                sumando: numero
            })
    }
    render(){
        return(
            <div>
                <p> Estado de la luz: {this.state.encendido}</p>
                <button onClick={() => alert ("Hola Mundo")}type="button" className="btn btn-primary"> Click me</button>
                <button onClick={this.cambiarEstado}type="button" className="btn btn-primary"> Encender/Apagar</button>
                <p> Numero: {this.state.sumando}</p>
                <button onClick={this.sumarNumero}type="button" className="btn btn-primary"> Sumando numeritos</button>
                
            </div>
        );
    }
}

export default Ejemplo;