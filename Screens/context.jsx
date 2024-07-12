
import React , {createContext,useState} from 'react';

const OrderContext = createContext (); // El context sirve para poder englobar todo los prop  y poder psarlos de padre a hijo para sju utilizacion

const OrderProvider = ({children}) => { // Un provider sirve para poder sincronizar los cambios y los componentes este n renderizdos
    const [productos , setProductos] = useState ([]);
    const [extras, setExtras] = useState ([]);
    const [total,setTotal] = useState(0);

    const addProduct = (producto,cantidad,extra) => { 

        const extrasArray = Array.isArray(extra) ? extra : [extra];

        const productCant = {...producto,cantidad, extras: extrasArray};
        
        const newProdcuts = [...productos,productCant];
        setProductos(newProdcuts);
        
         const extraItems = addExtra(extrasArray);
        calculateTotal(newProdcuts, extraItems);
        

          console.log('Extras del Producto' ,producto.extra)
            console.log(producto)
            console.log(extra)

    };

    const addExtra = (extra) => {
        console.log('Adding extra:', extra);
        const newExtras = [...extras,...extra].filter(e => e); 
        setExtras(newExtras);
        return newExtras;
    };

    const calculateTotal = (productos,extras) => {
        const total = productos.reduce((acc,producto) => acc + (producto.precio * producto.cantidad),0);
        const finalExtra = extras.reduce((acc,extra) => acc + (extra.price || 0),0);
        console.log('Extras Acumulados:',finalExtra);
        console.log('Total de la Orden :',total)
        setTotal(total + finalExtra);
    };

    return (
        <OrderContext.Provider
            value={{productos,total,extras,addExtra,addProduct}}
        >
        {children}
        </OrderContext.Provider>
    );


};


export {OrderProvider,OrderContext};

