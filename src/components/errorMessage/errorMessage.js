import React from 'react';
import './errormessage.css';
import img from './daynes.jpeg'
const ErrorMessage = ()=> {
    return (
        <>
        <img src={img} alt='error'></img>
    <span>Cant load</span>
    </>
    )
}

export default ErrorMessage;