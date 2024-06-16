import React, {createContext, useContext} from 'react';
import {RyeApi} from "./ryeApi";

const ApiContext = createContext(new RyeApi());

export default function ApiProvider({children}) {
    const apiClient = new RyeApi();

    return (<ApiContext.Provider value={apiClient}>{children}</ApiContext.Provider>);
}

export function useApi() {
    return useContext(ApiContext);
}
