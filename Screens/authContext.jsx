import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { Children, createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const[jwtToken, setJwtToken] = useState("");
    const[clienteId,setClienteId] = useState(0);

    useEffect(() => {
        const loadToken = async () => {
            try{
                const storedToken = await AsyncStorage.getItem("jwtToken");
                if(storedToken){
                    setJwtToken(storedToken);
                }

            } catch (error){
                console.log("Hubo un error en la obtencion del token")
            }
        };

        const loadClienteId = async () => {
            try{
                const storedClienteId = await AsyncStorage.getItem("clienteId");
                if(storedClienteId){
                    setClienteId(parseInt(storedClienteId, 10))
                }
            } catch (error){
                console.log("Hubo un error en la obtencion del clienteId", error)
            }
        };

        loadToken();
        loadClienteId();
    },[]);


    const login = async(token) => {
        AsyncStorage.setItem("jwtToken",token)
        setJwtToken(token)
    };

    const storeClienteId = async (clienteId) => {
        AsyncStorage.setItem("clienteId",clienteId.toString())
        setClienteId(clienteId)
    }

    const isExpired = () => {
        if(jwtToken){
            const decodedToken = jwtDecode(jwtToken);
            const now = Math.floor(Date.now() / 1000);
            const exp = decodedToken.exp
            if(now > exp){
                return true;
            }
        }

        return false;
    };

    return(

        <AuthContext.Provider value={{jwtToken,clienteId,login,isExpired,storeClienteId}}>
        {children}
        </AuthContext.Provider>

    );



};

export {AuthProvider,AuthContext}