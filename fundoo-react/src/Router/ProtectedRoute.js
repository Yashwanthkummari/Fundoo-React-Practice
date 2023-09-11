import { Navigate} from "react-router-dom";
import React from "react";

const Protectedroute=({ children}) =>{

    if(localStorage.getItem("token")){
        return children;
    }
    return <Navigate to ="/" />;
};

export default Protectedroute;