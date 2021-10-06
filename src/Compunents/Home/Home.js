import React, { useContext, useState } from 'react';
import "./Home.css"
import Sajek from "../travel-guru-master/Image/Sajek.png"
import Sreemongol from "../travel-guru-master/Image/Sreemongol.png"
import sundorbon from "../travel-guru-master/Image/sundorbon.png"
import { Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { UserContext } from '../../App';


const Home = () => {
    const [user, setUser]= useContext(UserContext);
    const [dateil, setDateil]= useState({
        name:"Kuakata",
        dateil:"Kuakata (Bengali: কুয়াকাটা) is a town in southern Bangladesh known for its panoramic sea beach.[1][2] Kuakata beach is a sandy expanse 18 kilometres (11 mi) long and 3 kilometres (1.9 mi) wide.[3] From the beach one can have an unobstructed view of both sunrise and sunset over the Bay of Bengal."
    });
    setUser(dateil)
    const handelClick=(e)=>{
        if(e.target.name==="Sajek"){
            const handelSajek={
                name:"Sajek",
                dateil:"Sajek Valley (Bengali: সাজেক উপত্যকা) is one of the popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.[3] The valley is 2,000 feet (610 m) above sea level."
            }
            const setPlace={...dateil}
            setPlace.name=handelSajek.name;
            setPlace.dateil=handelSajek.dateil;
            setDateil(setPlace)
        };


        if(e.target.name==='Sreemongol'){
            const handelSreemongol={
                name:"Sreemongol",
                dateil:"It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. "
            }
            const setPlace={...dateil}
            setPlace.name=handelSreemongol.name;
            setPlace.dateil=handelSreemongol.dateil;
            setDateil(setPlace)
        };


        if(e.target.name==="sundorbon"){
            const handelsundorbon={
                name:"sundorbon",
                dateil:"Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal."
            }
            const setPlace={...dateil}
            setPlace.name=handelsundorbon.name;
            setPlace.dateil=handelsundorbon.dateil;
            setDateil(setPlace)
        };
    }
   
    
    
    return (
        <div>
            <div className="Home-Body">
            <div className="Detail">
                <h1>{dateil.name}</h1> 
                <p>{dateil.dateil}</p>       
                <Link to={"/"+dateil.name}>
               <button className="bookingButtin">Booking now -</button>
                </Link>
            </div>
            <div className={'img'}>
            <Container>
            <img name="Sajek" onClick={handelClick} src={Sajek} alt="" />
            <img name="Sreemongol" onClick={handelClick} src={Sreemongol} alt="" />
            <img name="sundorbon" onClick={handelClick} src={sundorbon} alt="" />
            </Container>
            </div>
            </div>

            <footer>
                <p>e-mail on :- asiburrahman444@gmail.com</p>
            </footer>
        </div>
    );
};

export default Home;