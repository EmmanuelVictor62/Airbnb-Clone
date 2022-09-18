import React from "react";
import '../styles.css/Footer.css'

export default function Footer(props){
    return(
        <div>
            <div className="Footer-item-wrapper">
                <div className="Footer-right-link-wrapper">
                   <div className='Footer-midle-dot'>.</div>
                    <a className="Footer-right-link" href={props.linkItem.link}>
                        <p>{props.linkItem.linkName}</p>
                    </a>
                </div> 
            </div>


            {/* Mobile Footer Section--Hidden by default */}
            <div className="Footer-mobile">
                <div className="Footer-mobile__icon-wrapper-div">
                    <div className="Footer-icon-wrapper">
                        <i className="bi bi-search Footer-search-icon"></i>
                        <span className="Footer-text">Explore</span>
                    </div>
                    <div className="Footer-icon-wrapper">
                        <i className="bi bi-heart Footer-icon Footer-person-icon"></i>
                        <span className="Footer-text Footer-text--2">Wishlists</span>
                    </div>
                    <div className="Footer-icon-wrapper">
                        <i className="bi bi-person-circle Footer-icon"></i>
                        <span className="Footer-text Footer-text--3">Log in</span>
                </div>
                </div>
                
            </div>
            
        </div>
    )
}