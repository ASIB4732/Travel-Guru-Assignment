import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext, UserId} from '../../App';
import "./Hotel.css";
import logo from '../travel-guru-master/Logo2.png'
import hotel1 from '../travel-guru-master/Image/Rectangle 26.png'
import hotel2 from '../travel-guru-master/Image/Rectangle 27.png'
import hotel3 from '../travel-guru-master/Image/Rectangle 28.png'
import ster from '../travel-guru-master/Icon/star_1_.png'
const Hotel = () => {
  
  const [userInfo, setUserInfo]=useContext(UserId)

  const [user, setUser]=useContext(UserContext);

  const [hotalInfo, setHotalInfo]=useState()

  console.log(hotalInfo);
    const handelClick=()=>{
      const firstHotel={
        name:"Hotel Sea Crown",
        dateil:"Located on the beachfront and offering a 24-hour front desk, Hotel Sea Crown is located just 0.9 mi from the famous Sugandha Beach. Free WiFi access is available.Each air-conditioned room here will provide you with a seating area and work desk. Featuring a shower, private bathroom comes with free toiletries"}
        setHotalInfo(firstHotel)
      };

    console.log(hotalInfo);


    return (
        <div className="BookingHotels">
          <div className="headerDisplay d-flex justify-content-around"> 
        <div>
         <Link to="/Home">
        <img className="logo margin" src={logo} alt="" />
        </Link>
        </div>
        <nav className=" margin">
            <Link className="Links color" to="/News">News</Link>
            <Link className="Links color" to="/Destination">Destination</Link>
            <Link className="Links color" to="/Blog">Blog</Link>
            <Link className="Links color" to="/Contact">Contact</Link>
        </nav>
        {
            userInfo.email?<h4 className='margin'>{userInfo.name}</h4>:
             <Link to="/LogIn">
            <button className="loginButton margin">Log In</button>
            </Link>
        }



        </div>
           <div className='shop'>
           <div>
             <p>252 stays Apr 13-17 3 gueste</p>
             <h2><strong>Stay in {user.name}</strong></h2>
           </div>

           <div>
                <div className="hotelBox">
                  <div className='hotelImg'>
                    <img src={hotel1} alt="" />
                  </div>
                  <div>
                    <h5>Light bright airy stylish apt & safe peachfu stay</h5>
                    <p>4 guests  2 bedrooms  2 beds  2 baths</p>
                    <p>Wif Air conditioning Kitchen</p>
                    <p>Cancellation fexibility availiable</p>
                    <div className='lastLine'>
                      <img src={ster} alt="" />
                      <p>4.9(20)</p>
                      <p>$34/night</p>
                      <p>$167 Total</p>
                    </div>
                  </div>
                </div>


                <div className="hotelBox">
                  <div className='hotelImg'>
                    <img src={hotel2} alt="" />
                  </div>
                  <div>
                    <h5>Apartmrnt in Lost Panorama</h5>
                    <p>4 guests  2 bedrooms  2 beds  2 baths</p>
                    <p>Wif Air conditioning Kitchen</p>
                    <p>Cancellation fexibility availiable</p>
                    <div className='lastLine'>
                      <img src={ster} alt="" />
                      <p>4.8(10)</p>
                      <p>$52/night</p>
                      <p>$167 Total</p>
                    </div>
                  </div>
                </div>


                <div className="hotelBox">
                  <div className='hotelImg'>
                    <img src={hotel3} alt="" />
                  </div>
                  <div>
                    <h5>Ar Lounge & Pool(r & r + b & b)</h5>
                    <p>4 guests  2 bedrooms  2 beds  2 baths</p>
                    <p>Cancellation fexibility availiable</p>
                    <div className='lastLine'>
                      <img src={ster} alt="" />
                      <p>4.9(25)</p>
                      <p>$44/night</p>
                      <p>$167 Total</p>
                    </div>
                  </div>
                </div>
           </div>
           </div>
        </div>
    );
};

export default Hotel;