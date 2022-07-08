const initialState = {
    productos: [
        { id: 1, nombre: "Producto 1" },
        { id: 2, nombre: "Producto 2" },
        { id: 3, nombre: "Producto 3" },
        { id: 4, nombre: "Producto 4" },
        { id: 5, nombre: "Producto A" },
        { id: 6, nombre: "Producto B" },
        { id: 7, nombre: "Producto C" },
        { id: 8, nombre: "Producto D" }
    ],

    carrito: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AGREGAR_PRODUCTO_AL_CARRITO':
            const { idProducto, nombre } = action;
            if (state.carrito.length === 0) {
                return {
                    ...state,
                    carrito: [{ id: idProducto, nombre: nombre, cantidad: 1 }]
                }
            } else {
                const nuevoCarrito = [...state.carrito];
                const yaEstaEnCarrito = nuevoCarrito.filter((elemento) => {
                    return elemento.id === idProducto;
                }).length > 0;

                if (yaEstaEnCarrito) {
                    nuevoCarrito.forEach((item, i) => {
                        if (item.id === idProducto) {
                            const cantidadIndex = nuevoCarrito[i].cantidad;
                            nuevoCarrito[i] = {
                                id: idProducto,
                                nombre: nombre,
                                cantidad: cantidadIndex + 1
                            };
                        }
                    })
                } else {
                    nuevoCarrito.push(
                        {
                            id: idProducto,
                            nombre: nombre,
                            cantidad: 1
                        }
                    )
                }

                return {
                    ...state,
                    carrito: nuevoCarrito
                }
            }

        default:
            return state;
    }
}

export default reducer;