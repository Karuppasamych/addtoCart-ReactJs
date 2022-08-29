import React,{ useState } from 'react';
import {Navigate, Link} from "react-router-dom";
import axios from 'axios';

function Products(props){

    const [data, setData] = useState({
        productname:'',
        categories:'',
        price:''
    })    

    const {productname,categories,price} = data;

    
const onFormFieldChange = (e) =>{

    setData({...data, 
        
        [e.target.name]: e.target.value
    })
    // console.log(data)
}

const submitform = (e) =>{
        e.preventDefault();

        axios.post('/home',{

            data:data

        })
        // axios.post('http://localhost:5000/users', {
        //     userid: this.state.userid,
        //     fullname: this.state.fullname,
        // })

        // return (
        //         <Navigate
        //         to={{
        //             pathname: `/home`,
        //             state: data,
        //         }}
        //         />)
    }

    




        return(
            
            <div className="headername">
                <h1>Creating a Products</h1>
                <div className="pdetails">
                    <form className="createform" onSubmit={submitform}>
                        <div className="form-floating mb-3">
                        {/* <Select options={options} onChange={(values) => this.setValues(values)} /> */}
                            {/* <label htmlFor="floatingInput">Product Name</label> */}
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="categories" value={categories} onChange={onFormFieldChange}  id="categories" placeholder="Categories" required/>
                            <label htmlFor="floatingCategories">Categories</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" name="price" value={price} onChange={onFormFieldChange}  id="price" placeholder="Price" required/>
                            <label htmlFor="floatingPrice">Price</label>
                        </div>
                        <Link to='/home'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </Link>
                    </form>
                </div>
            </div>
            
        )
    
}

export default Products;