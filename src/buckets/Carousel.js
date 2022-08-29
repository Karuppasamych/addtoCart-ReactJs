import {React} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
const Carousel = () =>{
    
    return( 

        <div>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">            
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="la.jpg" alt="Los Angeles" className="d-block"  />
                <div className="carousel-caption">
                    <h3>Los Angeles</h3>
                    <p>We had such a great time in LA!</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="chicago.jpg" alt="Chicago" className="d-block"  />
                <div className="carousel-caption">
                    <h3>Chicago</h3>
                    <p>Thank you, Chicago!</p>
                </div> 
                </div>
                <div className="carousel-item">
                <img src="ny.jpg" alt="New York" className="d-block"  />
                <div className="carousel-caption">
                    <h3>New York</h3>
                    <p>We love the Big Apple!</p>
                </div>  
                </div>
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>

        <div className="container-fluid mt-3">
        <h3>Carousel Example</h3>
        <p>The following example shows how to create a basic carousel with indicators and controls.</p>
        </div>
        </div>
     )

}
export default Carousel;