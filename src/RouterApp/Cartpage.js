import React,{useState,useEffect} from 'react';
const Cartpage =()=>{
    // const [state, setState] = useState<StateType>();
    const [getarr, setGetarr]= useState([]);
    useEffect(()=>{
        getData();
    },[])



    const getData=()=>{
        let localData = localStorage.getItem('products')
        setGetarr(JSON.parse(localData))
    }
    return(
        <><h1>Listing Products</h1>
        {getarr.map((data, index)=>{
            return(
                <div className="colsm" key={index}>
                    <img src={data.Image}/>
                    <div className="card-bottom">
                        <h2 className="title-left">{data.name}</h2>
                        <span className="price-right">{data.price}</span>
                        <span className="details">{data.details}</span> 
                        {/* <button className="btn btn-primary" onClick={()=> decrementcart(data)}>- Cart</button> */}
                        <span className="Qty-price-right">Qty : {data.Qty}</span>
                    </div>
                </div>
            )
        })}
        
        </>


    )
}

export default Cartpage;