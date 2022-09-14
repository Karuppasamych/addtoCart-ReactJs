import React,{ useState } from 'react';
import {Navigate, Link, useNavigate} from "react-router-dom";
// import axios from 'axios';

const Login = ()=>{

    const [data , setData] = useState([

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

    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')


    
const onFormFieldChange = (e) =>{

    if(e.target.name=="username"){
        setUsername(e.target.value)
    }
    else if(e.target.name=="password"){
        setPassword(e.target.value)

    }
}
// localStorage.clear()
const navigate = useNavigate();
const submitform = (e) =>{
        e.preventDefault();

        let obj = {
            username:username,
            password:password
        }
        
        let ks = localStorage.setItem('username1', JSON.stringify(obj));
        // console.log(ks,'ÁA')
        
        // axios.post('http://localhost:5000/users', {
        //     userid: this.state.userid,
        //     fullname: this.state.fullname,
        // })

        navigate({
            
            pathname:'/home',
            search :'?name=react&age=45'
        });
    }

    
    




        return(
            
            <div className="headername">
                <h1>Login Page</h1>
                <div className="pdetails">
                    <form className="createform" onSubmit={submitform}>
                        <div className="form-floating mb-3">
                        {/* <Select options={options} onChange={(values) => this.setValues(values)} /> */}
                            {/* <label htmlFor="floatingInput">Product Name</label> */}
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="username" value={username} onChange={onFormFieldChange}  id="categories" placeholder="Categories" required/>
                            <label htmlFor="floatingCategories">UserName</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" name="password" value={password} onChange={onFormFieldChange}  id="price" placeholder="Price" required/>
                            <label htmlFor="floatingPrice">Password</label>
                        </div>
                        {/* <Link to='/home'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </Link> */}
                        <button type="submit" className="btn btn-primary">Submit</button>

                    </form>
                </div>
            </div>
            
        )
    
}

export default Login;