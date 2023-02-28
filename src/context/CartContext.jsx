import React, { useContext,useState } from "react";

const CartContext = React.createContext([])
//crear HOOK para exportar el contexto en una sola linea.

export const useCartContext = () => useContext(CartContext);
//useContext es una funcion que ejecuta nuestro contexto. 

// Debemos crear el Provider. 

const CartProvider = ({ children }) => {

// Iniciar el estado de nuestro CartContext

const [cart,setCart] = useState([])

//Funciones

// Precio Total
const totalPrice = () => {
    return cart.reduce((acc, data) => (acc += data.cantidad * data.precio), 0);
};

// Contador de productos para el cartwidget
const cantidadItem = () => {
    return cart.reduce((acc, data) => (acc += data.cantidad), 0);
};

// Vaciar Carrito
const clearCart = () => setCart([]);

// remover producto
const removeProduct = (id) => setCart(cart.filter((data) => data.id !== id));

const eliminarPorUnidad = (id) =>
        setCart(
        cart.map((data) => {
            if (data.id === id) {
            return { ...data, cantidad: data.cantidad - 1 };
            } else {
            return data;
            }
        })
        );

        // Esta en carrito ? 
    const isInCart = (id) => (cart.find((data) => data.id === id) ? true : false);

        // aGREGAR PRODUCTO
        const addProduct = (item, cantidad) => {
            if (isInCart(item.id)) {
                setCart(
                    cart.map((data) => {
                    return data.id === item.id
                        ? { ...data, cantidad: data.cantidad + cantidad }
                        : data;
                        })
                    );
                    } else {
                    setCart([...cart, { ...item, cantidad }]);
                    }
                };

    return(
        //Enviamos el nombre del Contexto en este caso CartContext
        //El value va a encerrar nuestro objeto de funciones y estados que querramos distribuir. 
        <CartContext.Provider value={{
            totalPrice,
            cantidadItem,
            clearCart,
            removeProduct,
            eliminarPorUnidad,
            addProduct,
            cart,
        }}>
            {/*Se va a enviar a todos los hijos que esten encerrados en el context*/}
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;
