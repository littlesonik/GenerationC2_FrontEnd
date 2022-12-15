import {useState} from 'react';

function Ejemplo2(){
//useState
    //asignandole valor a texto a través del useState
    const [texto, setTexto] = useState(" ");
    const [valorInput, setValorInput] = useState(null);

    function modificarParrafo(){
        //setTexto("texto modificado");
        //con setTexto se modifica el valor de texto
        setTexto(valorInput);
    }

    function capturaDatos(e){
        //e.target.value => captura cada uno de los caracteres ingresados
        console.log(e.target.value);
        //setTexto(e.target.value);
        setValorInput(e.target.value);
    }
    //capturar lo que ingresa el usuario en una variable, y cambiar el texto al clickear un boton
    return(
        <>
            <p>parrafo 1 {texto}</p>
            <input type="text" className="form-control" onChange={capturaDatos}></input>
            <button className= "btn btn-success" onClick={modificarParrafo}>Modificar</button>
        </>
    );
}
export default Ejemplo2;