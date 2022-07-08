import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Carrito = ({carrito}) => {

    return (
        <div>
            <h3>Carrito de compras</h3>
            {
                carrito.length > 0 ?
                    carrito.map((item, i) => {
                        return (
                            <Producto key={i}>
                                <NombreProducto>
                                    {item.nombre}
                                </NombreProducto>
                                Cantidad: {item.cantidad}
                            </Producto>
                        )

                    })
                    : <p>No has agregado productos al carrito</p>
            }
        </div>
    );
}


const mapStateToProps = (state)=>{
    return {
        carrito: state.carrito
    }
}

export default connect(mapStateToProps)(Carrito);

const Producto = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebebf3;
    font-size: 14px
`;

const NombreProducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;


