import  React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import datas from '../buckets/Jsondata';
import Products from "./Products";
import Displaydata from "./displaydata";
import Propsfunc1 from './propsfunc';
import Firstclass from './Firstclass';


class Bodycontent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            productname:'',
            categories:'',
            price:'',
            data:{},
            childdata:{}
        }
        this.handleGetdata = this.handleGetdata.bind(this);
    }

    // componentDidMount(){
    //     this.setState({
    //         data:this.state.data
    //     })
    //     console.log('TK',this.state.data)
    // }

    handleGetdata = (params)=>{

        this.setState({
            childdata: params
        });
        // this.setState({ productname: 'param' });


    }

    render(){
        return(
            <div className="row">
                <div className="col-sm-4">
                    <h2>About Us</h2>
                    <h5>Glimpse of Us:</h5>
                    <div className="fakeimg" style={{height:"200px", backgroundColor: "#aaa"}}>Fake Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    <hr className="d-sm-none"/>
                </div>
                <div className="col-sm-8">
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Dec 7, 2020</h5>
                    <div className="fakeimg" style={{height:"200px", backgroundColor: "#aaa"}}>Fake Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    
                    <p>Some text..</p>
                    
                </div>
                <div className="row">
                {datas.map((data, index)=>{
                    return <div className="col-sm-4">
                        <div className="card" key={index}>
                        <img src={data.Image} alt={data.Image} />
                        <div className="card-body">
                            <li>{data.name}</li>
                            <li>{data.price}</li>
                            <li>{data.details}</li>
                        </div>
                        </div>
                    </div>
                })}
                </div>
    
                {/* <div className="row">
                    {this.state.productname}
                </div>

                <div className="row">
                    <Firstclass handleGetdata={this.handleGetdata}/>
                    <h2>AC Lists Added Here</h2>
                    <ul>
                    
                    {Object.entries(this.state.childdata).map(([key, value]) => {
                        // console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
                        return(
                            <li>{key}: {value}</li>
                            )
                        
                    })}


                    </ul>
                </div> */}

                
                
            </div>
            
        )
    }

}


export default Bodycontent;