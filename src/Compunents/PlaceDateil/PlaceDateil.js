import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import "./PlaceDateil.css"
import linePhoto from "../travel-guru-master/shape.png";
import { Link} from "react-router-dom";
const PlaceDateil = () => {
    const [user, setUser]= useContext(UserContext);
    return (
        <div className="dateil">
            <div className="div1">
            <h1>{user.name}</h1>
            <img src={linePhoto} alt="" />
            <p>{user.dateil}</p>
            </div>
            <div className="div2">
                <form action="">
                    <p>Origin</p>
                    <input type="text" placeholder="From Location"/>
                    <p>Dentination</p>
                    <input type="text" placeholder="To Location"/>
                    <div className="formFlix">
                    <div>
                    <p>From</p>
                    <input type="date" name="" id="" />
                    </div>
                    <div>
                    <p>to</p>
                    <input type="date" name="" id="" />
                    </div>
                    </div>
                    <Link to="/Hotel">
                    <button className="bookingButton">Start Booking</button>
                    </Link>
                </form>
            </div>
            
        </div>
    );
};

export default PlaceDateil;