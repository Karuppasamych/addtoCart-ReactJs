import React from 'react';


const Form =()=>{

    const [products, setProducts] = React.useState([]);
    const [productname, setProductname] = React.useState([]);
    const [price, setPrice] = React.useState([]);
    const [details, setDetails] = React.useState([]);
    const [errmsg, setErrmsg] = React.useState(false);
    const [updateform, setUpdateform] = React.useState(false);
    const [formdata, setformdata] = React.useState([]);

    const [todos, setTodos] = React.useState([]);

    const handleChange = (event) =>{

        if(event.target.name === 'productname'){

            setProductname(event.target.value)

        }

        if(event.target.name === 'Price'){
            if(!isNaN(event.target.value)){
                // setPrice(event.target.value)
                setErrmsg(false)

            }
            else{
                setErrmsg(true)
            }
            setPrice(event.target.value)

        }
        if(event.target.name === 'description'){
            setDetails(event.target.value)
        }
    }


    const createProduct = (event) =>{


        event.preventDefault();
        var obj={
            id:products.length+1,
            productname:productname,
            price : price,
            details: details
        }
        setProducts(products=>[...products, obj])
        
        setProductname('')
        setPrice('')
        setDetails('')
    }
    
    const update = (e)=>{
        e.preventDefault();
        let kk  = formdata
        console.log(kk,'Y')
        const isExist = products.some(e => e.id == formdata.id);
        
        if(isExist){
            const cartData = products.map((e)=>{
                if(e.id === formdata.id){
                    return{
                        ...e,
                        productname:productname,
                        price:price,
                        details:details
                    }
                }else{
                    return{
                        ...e
                    }
                }
            });

            setProducts(cartData)

            
        }

        setUpdateform(false)
        setProductname('')
        setPrice('')
        setDetails('')

    }


    const removeFromcart= (event) =>{
        event.preventDefault();
    }

    const Editcart= (data) =>{

        setUpdateform(true)

        setProductname(data.productname)
        setPrice(data.price)
        setDetails(data.details)
        setformdata(data);

        
    }

    const postFetch =async ()=>{
        const ks = await fetch('https://jsonplaceholder.typicode.com/todos',{
            method:'post',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
              }),
            header:{
                'content-type':'application/json; charset=UTF-8',
            },

        })
        const ks1 = await ks.json();

        console.log(ks1)

    }


    const getFetch =async ()=>{
        const ks = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method:'PUT',
            body: JSON.stringify({
                id:1,
                title: 'KS',
                body: 'bar',
                userId: 1,
              }),
            header:{
                'content-type':'application/json; charset=UTF-8',
            },

        })
        const ks1 = await ks.json();

        console.log(ks1)

    }
    const patchFetch =async ()=>{
        const ks = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method:'PATCH',
            body: JSON.stringify({
                title: 'foo',
              }),
            header:{
                'content-type':'application/json; charset=UTF-8',
            },

        })
        const ks1 = await ks.json();

        console.log(ks1)

    }

        return(
            <div>
                
            <form>

                <input type='text' name='productname' value={productname} onChange={handleChange} placeholder="product name"/>
                <input type='text' name='Price' value={price} onChange={handleChange} placeholder="price"/>
                <span>{!errmsg ? null : 'Not a number'}</span>
                <input type='textarea' name='description' value={details} onChange={handleChange} placeholder="description"/>
                {!updateform?  <button type="submit" onClick={createProduct}>Create product</button>:
                <button  onClick={(e)=>update()}>update product</button>}
            </form>

            {products.map((data, index)=>{
                return(
                    <div className="colsm" key={index}>
                        <div className="card-bottom">
                        <input type='hidden' name='productname' value={data.id} onChange={handleChange} placeholder="product name"/>

                            <h2 className="title-left">{data.productname}</h2>
                            <span className="price-right">{data.price}</span>
                            <span className="details">{data.details}</span>  
                            <button className="btn btn-primary" onClick={()=> removeFromcart(data)}>Remove Cart</button>
                            <button className="btn btn-primary" onClick={()=> Editcart(data)}>Edit Cart</button>
                            {/* <span className="Qty-price-right">Qty : {data.Qty}</span>                       */}
                        </div>
                        
                    </div>
                )
            })}

            <button onClick={getFetch}>Get Data</button>
            <button>Post Data</button>
            <div className="">
                {todos.map((e, index)=>{
                    return(
                        <div key={index}>{e}</div>
                    )
                })}
            </div>


             
                            
            </div>
        )
}
export default Form;
