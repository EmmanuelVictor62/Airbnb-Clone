import React from 'react'
import '../styles.css/Profile.css';

export default function Profile(props){
    console.log(props)
    return(
        <div className='Profile-box'>
            <a href={props.item.link} className="Profile-box__link-wrapper">
                <img src={props.item.profileImg} className="Profile__img"></img>

                <div className='Profile__country-wrapper-box' >
                    <p>{props.item.country}</p>
                    <p>
                        {props.item.stats.icon}
                        {props.item.stats.rating}
                    </p>
                </div>
                
                <p>{props.item.stats.location}</p>
                <p>{props.item.stats.date}</p>
                <p>${props.item.amount} <span>night</span></p>
            </a>
        </div>
    )
}