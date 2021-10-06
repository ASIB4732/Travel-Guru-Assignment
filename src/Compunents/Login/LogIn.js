import React, { useContext, useState } from 'react';
import "./Login.css"
import firebaseConfig from "./FaierBaseConfig"
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider,getAuth,signInWithPopup,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import googlePhoto from "../travel-guru-master/Icon/google.png"
import { UserId } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../travel-guru-master/Logo2.png'
const LogIn = () => {
    const [userInfo, setUserInfo]=useContext(UserId)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const provider = new GoogleAuthProvider();
    const app = initializeApp(firebaseConfig);
    const [newUser,SetNewUser]=useState(false)
    const [user, SetUSer]=useState({
        isSignIn:false,
        name:"",
        email:"",
        picture:"",
        error:"",
        newUser:"",
        password:"",
        success:false
    })
    setUserInfo(user)
    const handelGoogleSignIn=()=>{
        const auth = getAuth();
   signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const {displayName,email,photoURL}=user;
    const userSignIn={
        isSignIn:true,
        name:displayName,
        email:email,
        picture:photoURL
    }
    SetUSer(userSignIn)
    history.replace(from);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
    }


    const handelGoogleSignOut=()=>{
     const auth = getAuth();
     signOut(auth).then(() => {
        const userSignIn={
            isSignIn:false,
            name:"",
            email:"",
            picture:""
        }
        SetUSer(userSignIn)
     }).catch((error) => {
     });
    }


    const handelInput=(e)=>{
     let isFormValid=true;
     if(e.target.name==="email"){
        isFormValid=/\S+@\S+\.\S+/.test(e.target.value)
     }
     if(e.target.name==="password"){
         const isPasswordNumber=e.target.value.length>7;
         const isPasswordTesr=/\d{1}/.test(e.target.value)
         isFormValid = isPasswordNumber && isPasswordTesr;
     }
    if(isFormValid){
        const newUser={...user};
        newUser[e.target.name]=e.target.value
        SetUSer(newUser)
    }
    }
    

    const handelForm=(e)=>{
        if(newUser && user.email && user.password){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
              .then((userCredential) => {
                const user = userCredential.user;
                const newUser={...user};
                newUser.error="";
                newUser.success=true
                newUser.isSignIn=true
                SetUSer(newUser)
                history.replace(from);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const newUser={...user};
                newUser.error=errorMessage
                SetUSer(newUser)
              });
        }
        if(!newUser && user.email && user.password){
            const auth = getAuth();
         signInWithEmailAndPassword(auth, user.email, user.password)
       .then((userCredential) => {
    const user = userCredential.user;
    const newUser={...user};
                newUser.error="";
                newUser.success=true
                SetUSer(newUser)
                history.replace(from);
       })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
        }
        e.preventDefault();
    }
    console.log(user.error);


    return (
        <div className="logInBox">
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
            userInfo.email?<button className="loginButton margin">{userInfo.name}</button>:
             <Link to="/LogIn">
            <button className="loginButton margin">Log In</button>
            </Link>
        }



        </div>

            <h1>Please compleat this page.</h1>
             
             {
                 user.isSignIn && 
                 <div>
                 <img className="userPicture" src={user.picture} alt="" />
                 <h3>name:- {user.name}</h3>
                 <h3>Email:- {user.email}</h3>
             </div>
             }
             
             <form  action="">
                 {
                     newUser &&  <input type="text" name="name"  onBlur={handelInput} placeholder='Enter your name'/>
                 }
                 <br />
                 <input type="text" name="email" onBlur={handelInput} placeholder='Enter your email' />
                 <br />
                 <input type="password" onBlur={handelInput}name="password" placeholder='password must be one number'/>
                 <br />
                 <input type="checkbox" name="newUser" onChange={()=>SetNewUser(!newUser)} />
             <label htmlFor="newUser">Crieat New Account</label>
             <br />
                 <input onClick={handelForm} type="submit" value={newUser ? "Sign Up":"Log In"} />
             </form>
             <p style={{color:"red"}}>{user.error}</p>
             {
                 user.success && <p style={{color:"green"}}>Successfully {newUser ?"Sign Up":"Log In"}</p>
             }



            <br />


            
            {
                 user.isSignIn ?<button onClick={handelGoogleSignOut}><img className="googleLogo" src={googlePhoto} alt="" /> Sign Out with Google</button>:<button onClick={handelGoogleSignIn}><img className="googleLogo" src={googlePhoto} alt="" /> Sign In with Google</button>
            }
            
        </div>
    );
};

export default LogIn;