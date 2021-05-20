import React from 'react'
import './Title.css'
import logo from '../images/Logo.png'

function Title({text}) {
    return (
        <div className="title">
            <div className="title_first">
                <img src={logo} alt="Restaurant Logo"/>
                <h1>Foodie's Heaven</h1>
            </div>
            <span className="title_second">Restaurant Table Reservation System</span>
        </div>
    )
}

export default Title
