import React, { Component } from 'react';
import ColorChange from './colorpicker.js';
import './Button.css';
export default function Common()
{
    
    var menuItems = ['Join-us', 'Setting', 'Login', 'Contact-us', 'Search', 'Help','Home','Download'];
    return <div id="common">
        {menuItems.map((el) => {
            return <button id={ColorChange()}>{el}</button>
        })}
     </div>

}

