import { useEffect, useState } from "react"


export const UseFetch = (url) => {

 
    const [state, setState] = useState({data:null,loading:true,error:null})



     
useEffect(() => {
   
    setState({data:null,loading:true})
    
    fetch(url)
        .then(res=>res.json())
        .then(res=>res.data.results)
        .then(data=>{

                setState (
                    {
                        loading: false,
                        data
                    })
           
        })
  
}, [url])


    return state
}