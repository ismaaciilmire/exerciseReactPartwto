import React,{useState,useEffect} from 'react'

export const UseForm = (URL) => {

    const [data,setData] = useState(null)
        const [loading,setLoading] = useState(true)
        const [Error,setError] = useState(null)
    
        useEffect (()=>{
    
            let isMounted = true;
            const FechData= async()=>{
                try{
    
                 const respone= await fetch(URL)
    
                   if(!respone.ok){
                    throw new Error(`https Error status : ${respone.status}`)
    
                    
                }
    
                const result= await respone.json();
    
                if(isMounted){
                    setData(result)
                    setLoading(false)
                }
    
    
                }catch(Error){
                    if(isMounted){
                        setError(null)
                        setLoading(false)
                    }
                }
    
              
                
            }
    
           
            
             FechData();
    
    
              return ()=>{
                isMounted = false;
            }
    
        },[URL])
    
 
 return {data,loading,Error}
  
}



export default UseForm;

