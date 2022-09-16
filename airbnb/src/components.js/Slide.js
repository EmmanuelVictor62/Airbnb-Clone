import '../styles.css/Header.css'
import React from 'react'
import '../styles.css/slide.css'

export default function Slide(props){
    return(
        <div>
            <div className='slide-wrap'>
                <div className={props.slide.slideName}>
                    <img className={props.slide.imgClass} src={props.slide.img}></img>
                    <p className={props.slide.nameClass}>{props.slide.name}</p>
                </div>
            </div>
            
        </div>
        
    )
}