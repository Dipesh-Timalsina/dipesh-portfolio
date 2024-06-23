import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "./data";




export const FeatureFlagsContext = createContext(null);


export default function FeatureFlagGlobalState({ children })
{
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});
    useEffect(() => {
        fetchFeatureFlags();
        async function fetchFeatureFlags() {
            try {
                setLoading(true)
                //original service call
                const response = await featureFlagsDataServiceCall();
                console.log(response);
                setEnabledFlags(response)
                setLoading(false);
                
            } catch (error) {
                console.log(error);
                 setLoading(false);
                throw new Error(error)
               
                
            }
    
        }

        
    },[])


    return (<FeatureFlagsContext.Provider value={{loading,enabledFlags}}>{children}</FeatureFlagsContext.Provider>);
}