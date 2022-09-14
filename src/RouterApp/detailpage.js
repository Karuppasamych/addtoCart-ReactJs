import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


const Detailpage = () => {


    const params = useParams();

    const[datas, setData] = useState({});

    useEffect(()=>{
        getdetails();
    },[params])

    const getdetails = () =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then((res) => res.json())
        .then(json => setData(json))
         
    }
    console.log('KS',datas)

    return(
        <div className="">
            <h1>Details Page for Product ID {params.id}</h1>
            
            {Object.entries(datas).map(([key, value]) => { 
                 return(
                    <li>{key}: {value}</li>
                    ) 
                
             })}

        </div>
    )
}

export default Detailpage;