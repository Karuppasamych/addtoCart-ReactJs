import React from 'react';
import Bodycontent from './Bodyconten';

class Firstclass extends React.Component{

    handleClick = ()=>{
        const obj = {name:'Split AC', Categories:'Air Conditioner', Price : '$1000'}
        this.props.handleGetdata(obj)
    }
    render(){
        return(
            <div className="">
                <h1>Passing Data From Child to parent Component</h1>
                
                {/* <input type="text"/> */}
                <button onClick={this.handleClick}>Get Data</button>
            </div> 
        )
    }
}

export default Firstclass;