import React, {Component} from 'react';
import SubContent from './subContent';
import Advertisement from './advertisement';

class MainContent extends Component {
    render(){
        return( //todas las etiquetas deben estar dentro de una etiqueta padre o contenedora
            <div>
                <p>Parrafo dentro del MainContent {this.props.nombre}</p>
                <SubContent nombre = {this.props.nombre}/>
                <Advertisement />
            </div>
        );
    }

};

export default MainContent;
