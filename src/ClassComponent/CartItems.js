import React, { Component } from 'react';

class CartItems extends Component{

    removeFromcart = () =>{
        return this.props.deleteCart(this.props.data)
    }
    increment = () =>{
        return this.props.incrementCart(this.props.data)
    }

    decrement = () =>{
        return this.props.decrementCart(this.props.data)
    }

    render(){
        return(
            <div className="colsm">
            <img src={this.props.data.Image}/>
            <div className="card-bottom">
               <h2 className="title-left">{this.props.data.name}</h2>
               <span className="price-right">{this.props.data.price}</span>
               <span className="details">{this.props.data.details}</span>
               <button className="btn btn-primary" onClick={this.removeFromcart}>Remove Cart</button>
               <button className="btn btn-primary" onClick={this.increment}>+ Plus</button>
               <button className="btn btn-primary" onClick={this.decrement}>- Minus</button>
               <span className="Qty-price-right">Qty : {this.props.data.Qty}</span>
            </div>
         </div>
        )
    }

}
export default CartItems;