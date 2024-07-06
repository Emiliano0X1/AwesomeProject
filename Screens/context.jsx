
import React , {createContext,useState} from 'react';

const OrderContext = createContext (); // El context sirve para poder englobar todo los prop  y poder psarlos de padre a hijo para sju utilizacion

const OrderProvider = ({children}) => { // Un provider sirve para poder sincronizar los cambios y los componentes este n renderizdos
    const [productos , setProductos] = useState ([]);
    const [total,setTotal] = useState(0);

    const addProduct = (producto) => { 
        setProductos([...productos,producto]);
        calculateTotal([...productos, producto]);
    };

    const calculateTotal = (productos) => {
        const total = productos.reduce((acc,producto) => acc + producto.precio,0);
        setTotal(total);
    };

    return (
        <OrderContext.Provider
            value={{productos,total,addProduct}}
        >
        {children}
        </OrderContext.Provider>
    );


};


export {OrderProvider,OrderContext};

