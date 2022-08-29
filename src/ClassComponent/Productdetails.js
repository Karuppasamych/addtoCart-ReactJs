import React, {Component}  from "react";

class Productdetails extends Component{
   
   
   addTocart = () =>{
      return this.props.addTocart(this.props.data);
   }

   render(){
      return( 
         
         <div className="colsm">
            <img src={this.props.data.Image}/>
            <div className="card-bottom">
               <h2 className="title-left">{this.props.data.name}</h2>
               <span className="price-right">{this.props.data.price}</span>
               <span className="details">{this.props.data.details}</span>
               <button className="btn btn-primary" onClick={this.addTocart}>Add TO Cart</button>
               
            </div>
         </div>
      )
   }
} 

export default Productdetails;