import React from 'react'
import '../styles.css/Header.css';
import AirbnbLogo from '../images/Airbnb-log.png'

export default function Header(){
    return(
        <div className='Header' >
            <div className='Header__left-section'>
                <img src={AirbnbLogo} className="Header__logo" ></img>
            </div>

            <div className='Header__middle-section'>
                <div className='Header__input' >
                    <div className='Header__input-div Header__input--div-1' >Anywhere</div>
                    <div className='Header__input-div Header__input--div-2' >Any week</div>
                    <div className='Header__input-div Header__input--div-3'>
                        Add guests
                        <span className='Header-input-div-3__span' >
                            <i className="bi bi-search Header__input-div-3__search-icon"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div className='Header__right-section'>
                <p className='Header__right-section--description' >Become a Host</p>
                <div>
                    <i className="bi bi-globe Header-right-section__globe"></i>
                </div>
                <div className='Header-right-section__div' >
                    <i className="bi bi-list Header-right-section__nav-icon"></i>
                    <i className="bi bi-person-circle Header-person-icon">
                        <div className='Header-right-section-circle' ></div>
                    </i>
                </div>
            </div>


            {/* Mobile Search Input Field--Not displayed by default */}
            <div className='Header-mobile-input-field'>
                <div className='Header-mobile-input-field__box'>
                    <div className='Header-mobile__search-icon-wrapper'>
                        <i className="bi bi-search Header-mobile__search-icon"></i>
                    </div>

                    <div className='Header-mobile-middle-section'>
                        <h1 className='Header-mobile-middle-section__title'>Where to?</h1>
                        <div className='Header-mobile-middle-section__div'>
                            <p className='Header-mobile-description desc-1'>Anywhere</p>
                            <div className='Header-midle-dot'>.</div>

                            <p className='Header-mobile-description desc-2'>Any week</p>
                            <div className='Header-midle-dot'>.</div>

                            <p className='Header-mobile-description desc-3'>Add guests</p>
                        </div>
                    </div>

                    <div className='Header__mobile-slider-icon-wrapper'>
                     <i className="bi bi-sliders Header__mobile-slider-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}