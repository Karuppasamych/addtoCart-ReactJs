import React from 'react';
import Propsfunc from '../buckets/propsfunc';


const Propsfunc1 = (props) =>{
    return(
        <div className="fruits-list">
            
            <ul className="list-none"><h1>Parent to Child</h1>{props.data.map((data)=>{
            
            return <li>{data}</li>
            
        })}</ul></div>
    )
}

export default Propsfunc1;