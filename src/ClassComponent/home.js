import React,{Component} from 'react';
import Navbar from '../ClassComponent/Navbar'
import Productdetails from '../ClassComponent/Productdetails'
import 'bootstrap/dist/css/bootstrap.css';
import CartItems from '../ClassComponent/CartItems';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            
            cartItems : [],
            products : [{
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
              },
            //   {
            //     id:3,
            //      name:'ASUS Vivobook S14 OLED',
            //      price:'$40 ',
            //      details:'Lenovo Yoga Slim 7 Intel EVO Core i7 11th Gen - (16 GB/1 TB SSD/Windows 10 Home) Yoga Slim 7 14ITL05b Thin and Light Laptop  (14 inch, Slate Grey, 1.36 Kg, With MS Office)',
            //      Image:'https://cdn.arstechnica.net/wp-content/uploads/2019/12/elitedragonfly2-800x534.jpg',
            //      Qty:1 
            //   },
            //   {
            //     id:4,
            //       name:'ASUS Vivobook S14 OLED',
            //       price:'$40 ',
            //       details:'Lenovo Yoga Slim 7 Intel EVO Core i7 11th Gen - (16 GB/1 TB SSD/Windows 10 Home) Yoga Slim 7 14ITL05b Thin and Light Laptop  (14 inch, Slate Grey, 1.36 Kg, With MS Office)',
            //       Image:'https://cdn.vox-cdn.com/thumbor/_PxD5vSH3vZW-uxjvplmY-IOrME=/0x0:2040x1360/920x613/filters:focal(877x889:1203x1215):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65901501/awhite_191210_3830_0014.0.jpg',
            //       Qty:1
            //    },
            //    {
            //     id:5,
            //       name:'acer Intel EVO Swift 3',
            //       price:'$40 ',
            //       details:'Lenovo Yoga Slim 7 Intel EVO Core i7 11th Gen - (16 GB/1 TB SSD/Windows 10 Home) Yoga Slim 7 14ITL05b Thin and Light Laptop  (14 inch, Slate Grey, 1.36 Kg, With MS Office)',
            //       Image:'https://cdn.mos.cms.futurecdn.net/bwcE9CwvUuDvp99XcBywwm-1200-80.jpeg.webp',
            //       Qty:1
            //    }
        ],
        }
        
        // this.addTocart =  this.addTocart.bind(this);
    }
     addTocart =(data)=>{

        let getid = data.id
        const isExist = this.state.cartItems.some((e)=> e.id == getid);
        console.log(isExist)
        if(isExist){

            const ks_Data = this.state.cartItems.map((prod)=>{
                if(prod.id === getid){
                    return{
                        ...prod,
                        Qty:prod.Qty +1     
                    };
                }
                else{
                    return prod;                    
                }
            });

            this.setState({
                cartItems:ks_Data
            });            
        }
        else{

            this.setState({
                cartItems:[...this.state.cartItems, {...data, Qty:1}]
            })
            
        }

    }

    deleteCart = (delData)=>{
        const deldata = this.state.cartItems.filter(e => e.id !== delData.id);

        this.setState({cartItems: deldata})
    }


    incrementCart =(indata)=>{

        let getid = indata.id
        const isExist = this.state.cartItems.some((e)=> e.id == getid);
        console.log(isExist)
        if(isExist){

            const ks_Data = this.state.cartItems.map((prod)=>{
                if(prod.id === getid){
                    return{
                        ...prod,
                        Qty:prod.Qty +1     
                    };
                }
                else{
                    return prod;                    
                }
            });

            this.setState({
                cartItems:ks_Data
            });            
        }

        // this.addTocart(indata)

    }
    decrementCart = (decdata) =>{

        if(decdata.Qty >1){
            let getid = decdata.id
        const isExist = this.state.cartItems.some((e)=> e.id == getid);
        console.log(isExist)
        if(isExist){

            const ks_Data = this.state.cartItems.map((prod)=>{
                if(prod.id === getid){
                    return{
                        ...prod,
                        Qty:prod.Qty -1     
                    };
                }
                else{
                    return prod;                    
                }
            });

            this.setState({
                cartItems:ks_Data
            });            
        }
        }
        else{
            this.deleteCart(decdata)
        }
        
        // let getid = decdata.id

        // // console.log(getid,'KKK')
        // const isExist = this.state.cartItems.some((e)=> e.id == getid);
        
        // if(isExist == true){
        //     const loopdata =  this.state.cartItems.map((e)=>{
        //         console.log(e.id,'KKK')
        //         // var Fqty = this.state.cartItems.some((e)=> e.Qty == 1);
        //         if(e.id == getid){
        //             if(this.state.cartItems.some((e)=> e.Qty == 1)){
        //                 this.deleteCart(decdata);                        
        //             }
        //             else{
        //                 return{
        //                     ...e,
        //                     Qty:e.Qty - 1
        //                 }
        //             }

                    

        //         }
                
                
                
        //     })
        //     this.setState({
        //         cartItems:[...loopdata] 
        //     })
        // }
    }
    
    render(){
        return(
            <div className=""> 
                <Navbar />
                {this.state.products.map((data, index)=>{
                
                    return <Productdetails key={index} data={data} addTocart = {this.addTocart}/>

                })}
                
                <h1>CartItems</h1>
                {this.state.cartItems.map((data, index)=>{
                
                    return <CartItems key={index} data={data} deleteCart={this.deleteCart} incrementCart = {this.incrementCart} decrementCart={this.decrementCart}/>

                })}
                
                
            </div>

        )
    
    }
}

export default Home;