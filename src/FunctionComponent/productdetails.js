import React from 'react';

const Productdetails = (props) =>{


    function addTocart(data){
        props.addcart(data)
    }
    
    return(
        <div >
            {props.prods.map((data , index)=>{
                return(
                    <div className="colsm" key={index}>
                        <img src={data.Image}/>
                        <div className="card-bottom">
                            <h2 className="title-left">{data.name}</h2>
                            <span className="price-right">{data.price}</span>
                            <span className="details">{data.details}</span> 
                            <button className="btn btn-primary" onClick={()=> addTocart(data)}>Add TO Cart</button>
                        
                        </div>
                    </div>
                )
                
            })}

        </div>
    )
}

export default Productdetails;