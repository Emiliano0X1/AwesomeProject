
import React , {createContext,useState} from 'react';

const OrderContext = createContext (); // El context sirve para poder englobar todo los prop  y poder psarlos de padre a hijo para sju utilizacion

const OrderProvider = ({children}) => { // Un provider sirve para poder sincronizar los cambios y los componentes este n renderizdos
    const [productos , setProductos] = useState ([]);
    const [extras, setExtras] = useState ([]);
    const [total,setTotal] = useState(0);

    const addProduct = (producto,cantidad) => { 

        const productCant = {...producto,cantidad};
        
         setProductos([...productos,productCant]);
        
        calculateTotal([...productos, productCant],extras);
    };

    const calculateTotal = (productos,extras) => {
        const total = productos.reduce((acc,producto) => acc + (producto.precio * producto.cantidad),0);
        const finalExtra = extras.reduce((acc,extra) => acc + extra.precio,0);
        setTotal(total + finalExtra);
    };

    const addExtra = (extra) => {
        setExtras([...extras,extra]);
        calculateTotal([productos,[...extras,extra]])
    }

    return (
        <OrderContext.Provider
            value={{productos,total,extras,addExtra,addProduct}}
        >
        {children}
        </OrderContext.Provider>
    );


};


export {OrderProvider,OrderContext};

