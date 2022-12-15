import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cheems from '../styles/cheems.webp'
import catan from '../styles/catan.jpg'

class SubContent extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img id='cheems'
                        className="d-block w-100"
                        src= {cheems}
                        alt="First slide"
                        
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img id='catan'
                        className="d-block w-100"
                        src={catan}
                        alt="Second slide"
                        
                    />

                    <Carousel.Caption>
                        <h3>{this.props.nombre}</h3>
                        <p>Mi perrito Catan, muy bonito</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default SubContent;