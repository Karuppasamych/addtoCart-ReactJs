import React,{useState} from 'react';
import Fnavbar from '../FunctionComponent/navbar';
import Products from '../FunctionComponent/productdetails';
import CreateProduct from '../FunctionComponent/form'

const Home = ()=>{

    const [products , setProducts] = useState([

        {
            id:0,
            name:'Lenovo Yoga Slim 7 ',
            price:'$1000',
            details:'Lenovo Yoga Slim 7 Intel EVO Core i7 11th Gen - (16 GB/1 TB SSD/Windows 10 Home) Yoga Slim 7 14ITL05b Thin and Light Laptop  (14 inch, Slate Grey, 1.36 Kg, With MS Office)',
            Image:'https://www.cnet.com/a/img/resize/8b0132ec0dad37d2b1c71552bfdf72f0549752cb/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=362&width=644',
            Qty:0 
         },
         {
            id:1,
             name:'ASUS Vivobook S14 OLED',
             price:'$999',
             details:'Lenovo Yoga Slim 7 Intel EVO Core i7 11th Gen - (16 GB/1 TB SSD/Windows 10 Home) Yoga Slim 7 14ITL05b Thin and Light Laptop  (14 inch, Slate Grey, 1.36 Kg, With MS Office)',
             Image:'https://cdn.mos.cms.futurecdn.net/bwcE9CwvUuDvp99XcBywwm-1200-80.jpeg.webp',
             Qty:0
          },
          {
            id:2,
             name:'acer Intel EVO Swift 3 ',
             price:'$40 ',
             details:'Lenovo Yoga Slim 7 Intel EVO Core i7 11th Gen - (16 GB/1 TB SSD/Windows 10 Home) Yoga Slim 7 14ITL05b Thin and Light Laptop  (14 inch, Slate Grey, 1.36 Kg, With MS Office)',
             Image:'https://cdn.vox-cdn.com/thumbor/_PxD5vSH3vZW-uxjvplmY-IOrME=/0x0:2040x1360/920x613/filters:focal(877x889:1203x1215):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65901501/awhite_191210_3830_0014.0.jpg',
             Qty:0
          }

    ])

    const[cart, setCart]=useState([]);
    function addcart(data){

        const isExist = cart.some(e => e.id == data.id);
        
        if(isExist){
            const cartData = cart.map((e)=>{
                if(e.id === data.id){
                    return{
                        ...e,
                        Qty:e.Qty+1
                    }
                }else{
                    return{
                        ...e
                    }
                }
            });

            setCart(cartData)

            
        }
        else{
            setCart(cart =>[...cart, {...data, Qty :1}])
        }       
        
    }
    function incrementcart(data){
        addcart(data);
    }
    function decrementcart(data){

        if(data.Qty > 1){
            const isExist = cart.some(e => e.id == data.id);
        
            if(isExist){
                const cartData = cart.map((e)=>{
                    if(e.id === data.id){
                        return{
                            ...e,
                            Qty:e.Qty-1
                        }
                    }else{
                        return{
                            ...e
                        }
                    }
                });
    
                setCart(cartData)
    
                
            }
            else{
                setCart(cart =>[...cart, {...data, Qty :1}])
            } 
        }
        else{
            removeFromcart(data)
        }

        

    }
    const removeFromcart =(data)=>{
        console.log('KSY', data)
        let fdIndex = cart.filter(e=> e.id !== data.id)
        setCart(fdIndex)
    }
    return(
        <div className="">
            <Fnavbar />
            <Products prods = {products} addcart = {addcart}/>
            
            <h1>AddCart Items</h1>

            {cart.map((data, index)=>{
                return(
                    <div className="colsm" key={index}>
                        <img src={data.Image}/>
                        <div className="card-bottom">
                            <h2 className="title-left">{data.name}</h2>
                            <span className="price-right">{data.price}</span>
                            <span className="details">{data.details}</span> 
                            <button className="btn btn-primary" onClick={()=> removeFromcart(data)}>Remove Cart</button>
                            <button className="btn btn-primary" onClick={()=> incrementcart(data)}>+ Cart</button>
                            <button className="btn btn-primary" onClick={()=> decrementcart(data)}>- Cart</button>
                            <span className="Qty-price-right">Qty : {data.Qty}</span>
                        
                        </div>
                    </div>
                )
            })}

            <CreateProduct/>
            
            

        
        
        </div>
    )
}

export default Home;