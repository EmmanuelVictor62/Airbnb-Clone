import React from 'react'
import '../styles.css/Profile.css';

export default function Profile(props){
    
    let badgeText 
    if(props.item.available === "Available"){
        badgeText = "Available"
    } else if (props.item.available === "Not Available"){
        badgeText = "Not Available"
    }


    return(
        <div className='Profile-box'>
            {badgeText && <div className='card-badge'>{badgeText}</div> }

            <div className='ProfileCard__arrow-icon--box'>
                <i className="fa-solid fa-chevron-right ProfileCard__arrow-icon"></i>
            </div>

            <a href={props.item.link} className="Profile-box__link-wrapper">
                <div className='Profile__img-wrapper'>
                 <img src={props.item.profileImg} className="Profile__img"></img>
                </div>

                <div className='Profile__country-wrapper-box' >
                    <p className='Profile__country'>{props.item.country}</p>
                    <div className='Profile__stats Profile__stats--rating'>
                        {props.item.stats.icon}
                        {props.item.stats.rating}
                    </div>
                </div>
                
                <p className='Profile__stats Profile__stats--distance'>{props.item.stats.distance}</p>
                <p className='Profile__stats Profile__stats--date'>{props.item.stats.date}</p>
                <p className='Profile__stats Profile__stats--price'>${props.item.amount} 
                    <span className='Profile__stats Profile__stats--span'>night</span>
                </p>
            </a>
        </div>
    )
}