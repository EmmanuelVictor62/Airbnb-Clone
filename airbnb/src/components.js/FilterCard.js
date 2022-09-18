import React from "react";

export default function FilterCard(){
    return(
        <div className="FilterCard-wrapper">
            <div>
             <i className="fa-solid fa-chevron-right FilterCard__arrow-icon"></i>
            </div>

            <div className="FilterCard__filterBox">
             <i className="bi bi-sliders FilterCard__filterBox--slider"></i>
             <p className="FilterCard__filterBox--description">Filters</p>
            </div>


            
        </div>
    )
}