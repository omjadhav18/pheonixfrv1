import React from 'react'
import apiInstance from '../utils/axios'
import { useEffect ,useState} from 'react'

function Request() {
    const [data,setData]=useState("");
    useEffect(()=>{
        apiInstance
            .get('events/')
            .then((response)=>{
                setData(response.data);
            });
        
    },[])
    console.log(data);
  return (
    <div>
      this is the page!
    </div>
  )
}

export default Request
