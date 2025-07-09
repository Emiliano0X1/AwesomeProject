
import React , {createContext,useState,useEffect,useContext} from 'react';
import HotDrinks from './productsScreen/hotDrinks';
import { AuthContext } from './authContext';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderContext = createContext (); // El context sirve para poder englobar todo los prop  y poder psarlos de padre a hijo para sju utilizacion

const OrderProvider = ({children}) => { // Un provider sirve para poder sincronizar los cambios y los componentes este n renderizdos
    const [productos , setProductos] = useState ([]);
    const [productosMain,setProductosMain] = useState ([]);
    const [extras, setExtras] = useState ([]);
    const [extrasMain,setExtrasMain] = useState ([]);
    const [total,setTotal] = useState(0);
    //const [clienteId,setClienteId] = useState(0);

    const {jwtToken, isExpired} = useContext(AuthContext)

    //const navigation = useNavigation()

   // const getClienteId = (id) => {
     //   setClienteId(id);
   // }

    const fecthProductos = async () => {
        try {
            console.log("antes de fechear productos");
            const response = await fetch("https://cafettoapp-backend.onrender.com/api/v1/producto" ,  {
                headers : {
                    Authorization : `Bearer ${jwtToken}`
                }
            });

            if(!response.ok){
                console.log("Las credenciales no son correctas o no existe el token")
            }

            if(isExpired()){
                Alert.alert("Sesion Expirada", "Por favor vuelva a iniciar sesion")
               // navigation.navigate('welcome')
            }

            const data = await response.json();
            setProductosMain(data); 
            console.log("Productos:", data);
    
            if (data && data.length > 0) {
                fecthExtras(); 
            }

        } catch (error) {
            console.error("Error al traer productos:", error);
        }
    };
    
    const fecthExtras = async () => {
        try {
            console.log("antes de fechear extras");
            const response = await fetch("https://cafettoapp-backend.onrender.com/api/v1/extra", {
                headers : {Authorization : `Bearer ${jwtToken}`}
            });

            if(!response.ok){
                console.log("Las credenciales no son correctas o no existe el token")
            }

            const data = await response.json();
            setExtrasMain(data);
            console.log("Extras:", data);
        } catch (error) {
            console.error("Error al traer extras:", error);
        }
    };
    
    useEffect(() => {
        if(jwtToken && typeof jwtToken === "string"){
            fecthProductos();
        }
    }, [jwtToken]);
    
    
    const addProduct = (producto,cantidad,extra) => {  // Aqui esta la logica para agregar el producto a la orden

        const extrasArray = Array.isArray(extra) ? extra : [extra]; //checa si es un array o no, para convertirlo a array

        const productCant = {...producto,cantidad, extras: extrasArray}; // Este es el constructor principal que tiene prodcuto,cantidad, y los extras

        const newProdcuts = [...productos,productCant]; //Aqui se tiene un nuevo array de los productos con sus cantidades 
        setProductos(newProdcuts); // Se añade a la lista de productos
        
        const extraItems = addExtra(extrasArray); // SE LLAMA a la funcion de addEtxra
        calculateTotal(newProdcuts); // se llama a la funcion para manteber actualizado el total
        
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

    const eliminarProducto = (index) => {
        console.log('Lista de Productos antes de ser eliminados', productos);

        // Filtrar la lista de productos para excluir el producto a eliminar
        const nuevosProductos = productos.filter((_, i) => i !== index);

        setProductos(nuevosProductos);

        // Recalcular el total después de la eliminación
        calculateTotal(nuevosProductos);

        console.log('Lista de Productos después de ser eliminados', nuevosProductos);
    };

    const calculateTotal = (productos) => { //Esta es la funcion que permite calcular el total del pedido
            const total = productos.reduce((acc, producto) => {
                // Sumar el precio del producto multiplicado por la cantidad
                const productoTotal = producto.price * producto.cantidad;

                const extrasArray = Array.isArray(producto.extras) ? producto.extras.filter(Boolean) : [];
                console.log('Extras del producto:', extrasArray);

                if(Array.isArray(extrasArray) && extrasArray.length > 0){
                // Sumar el precio de los extras asociados a ese producto
                    const extrasTotal = extrasArray.reduce((extraAcc, extra) => {
                        return extraAcc + (extra.price * producto.cantidad || 0);
                }, 0);

                // Añadir el total del producto y sus extras al acumulador
                return acc + productoTotal + extrasTotal;

            }

            else{
                return acc + productoTotal;
              }
            }, 0);

            console.log('Total de la Orden :', total);
            setTotal(total); // Establecer el total en el estado
    };

    return (
        <OrderContext.Provider // finalmente todas las funciones se exportan para poder ser usadas en lso componentes
            value={{productos,total,extras,productosMain,extrasMain,addExtra,addProduct,eliminarProducto,setProductos}}
        >
        {children}
        </OrderContext.Provider>
    );


};


export {OrderProvider,OrderContext};

