import React,{useState, useContext} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import { Context } from '../context/stateContext';
const Homepage = ()=>{

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

    ]);
    const {varstate, updatestate} = useContext(Context) 
    // const state = useContext(Context);
    
    const [arr, setArrdetails] = useState([]);
    // const arrDetails = []
    const AddtoCart =(data)=>{

        console.log(varstate.cartItems,'UPDATA!')

        
        const isExist = varstate.cartItems.some((e)=> e.id == data.id);
        console.log(isExist,'CHECK')
        if(isExist){
            const updatedata = varstate.cartItems.map((e)=>{
                if(e.id === data.id){
                    return{
                        ...e,  
                        Qty:e.Qty+1
                    }

                }
                else{

                    return{
                        ...e
                    }

                }
            });
            updatestate({type:'ADD_to_Cart', Data:updatedata})
        }
        else{
            // setArrdetails(arr =>[...arr, {...data, Qty:1}]);
            updatestate({type:'ADD_to_Cart', Data:[...varstate.cartItems ,{...data, Qty:1}]})
        }

    // localStorage.setItem('products', JSON.stringify(arr))

        


    }

    console.log(varstate,'GETCONTEXT');

    const [searchparams] = useSearchParams().entries();

    console.log(searchparams,'SAP')
    const navigate = useNavigate()
    const Moreinfo =(data)=>{

        navigate(`/cartdetailspage/${data.id}`);
    }

    
    return(
        <div className="">
            
            <h1>Product Details</h1>

            {products.map((data, index)=>{
                return(
                    <div className="colsm" key={index}>
                        <img src={data.Image}/>
                        <div className="card-bottom">
                            <h2 className="title-left">{data.name}</h2>
                            <span className="price-right">{data.price}</span>
                            <span className="details">{data.details}</span> 
                            <button className="btn btn-primary" onClick={()=> AddtoCart(data)}>Add to Cart</button>
                            <button className="btn btn-primary" onClick={()=> Moreinfo(data)}>More Info</button>
                            {/* <button className="btn btn-primary" onClick={()=> decrementcart(data)}>- Cart</button> */}
                            {/* <span className="Qty-price-right">Qty : {data.Qty}</span> */}
                        </div>
                    </div>
                )
            })}

            

        
        
        </div>
    )
}

export default Homepage;