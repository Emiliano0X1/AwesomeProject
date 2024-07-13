
import React , {createContext,useState} from 'react';

const OrderContext = createContext (); // El context sirve para poder englobar todo los prop  y poder psarlos de padre a hijo para sju utilizacion

const OrderProvider = ({children}) => { // Un provider sirve para poder sincronizar los cambios y los componentes este n renderizdos
    const [productos , setProductos] = useState ([]);
    const [extras, setExtras] = useState ([]);
    const [total,setTotal] = useState(0);

    const addProduct = (producto,cantidad,extra) => {  // Aqui esta la logica para agregar el producto a la orden

        const extrasArray = Array.isArray(extra) ? extra : [extra]; //checa si es un array o no, para convertirlo a array

        const productCant = {...producto,cantidad, extras: extrasArray}; // Este es el constructor principal que tiene prodcuto,cantidad, y los extras
        
        const newProdcuts = [...productos,productCant]; //Aqui se tiene un nuevo array de los productos con sus cantidades 
        setProductos(newProdcuts); // Se añade a la lista de productos
        
        const extraItems = addExtra(extrasArray); // SE LLAMA a la funcion de addEtxra
        calculateTotal(newProdcuts, extraItems); // se llama a la funcion para manteber actualizado el total
        
          console.log('Extras del Producto' ,producto.extra)
            console.log(producto)
            console.log(extra)

    };

    const addExtra = (extra) => { // Este es el constructor que se encarga de añadir los extras
        console.log('Adding extra:', extra);
        const newExtras = [...extras,...extra].filter(e => e);  // Crea los extras y filtra los que estan indefinidos
        setExtras(newExtras); // los añade al state
        return newExtras;
    };

    const eliminarProducto = (index) => { // Esta funcion es la que perimite al ususario eliminar un producto de la lista

        console.log('Lista de Productos antes de ser eliminados',productos)

        const prodcutSelect = productos[index]; //Primero se busa el producto seleccionado

        let newExtras = extras;

        if(prodcutSelect.extras && prodcutSelect.extras.length > 0){ //Checa si tiene extras que tambien seran eliminaods
            const extrasRemove = prodcutSelect.extras.flat(); // Sirve para quitar los extras que estan anidados
            newExtras = extras.filter(extra => !extrasRemove.includes(extra)) // quita los extras usando .filter y .includes para verificar
        }

        const newProdcuts = productos.filter((_,i) => i != index ); // Finalmente se hace un proceso similar con los productos

        console.log('Lista de Productos despues de ser eliminados',newProdcuts)

        setProductos(newProdcuts); // Se actualizan las listas
        setExtras(newExtras);
        calculateTotal(newProdcuts,newExtras);
    }

    const calculateTotal = (productos,extras) => { //Esta es la funcion que permite calcular el total del pedido
        const total = productos.reduce((acc,producto) => acc + (producto.precio * producto.cantidad),0); // se tiene acc que significa que es acumulativo y se pone al totoal
        const finalExtra = extras.reduce((acc,extra) => acc + (extra.price || 0),0); // lo mismo con los extras
        console.log('Extras Acumulados:',finalExtra);
        console.log('Total de la Orden :',total)
        setTotal(total + finalExtra); // al final se suman
    };

    return (
        <OrderContext.Provider // finalmente todas las funciones se exportan para poder ser usadas en lso componentes
            value={{productos,total,extras,addExtra,addProduct,eliminarProducto}}
        >
        {children}
        </OrderContext.Provider>
    );


};


export {OrderProvider,OrderContext};

