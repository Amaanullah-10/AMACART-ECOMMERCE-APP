import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';
import {useStateContext} from '../context/StateContext';
import {runFireWorks} from '../lib/utils';

const Success = () => {
    const {setCartItems,setTotalPrice,setTotalQuantities}= useStateContext();
    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireWorks();
    },[])//this is going to execute as soon as the succesful page is loaded
  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
            <BsBagCheckFill/>
            </p>
            <h2>Thank You For Your Purchase!</h2>
            <p className="email-msg">
                Check your email for the receipt of your order
            </p>
            <p className="description">
                If you have any questions, please email us at <a className="email"href="mailto:amaanullah60@gmail.com">amaanullah60@gmail.com</a>
            </p>
            <Link href="/">
                <button type="button" width="300px" className="btn">
                    Continue Shopping
                </button>
            </Link>
            
        </div>

    </div>
  )
}

export default Success