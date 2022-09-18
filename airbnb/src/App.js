import './App.css'
import Header from './components.js/Header'
import Slide from './components.js/Slide'
import SlideData from './components.js/SlideData'
import Profile from './components.js/Profile'
import profileData from './components.js/ProfileData';
import FilterCard from './components.js/FilterCard'
import FooterData from './components.js/FooterData'
import Footer from './components.js/Footer'

function App() {
  const slide = SlideData.map((slide) => {
    return(
      <Slide 
        key={slide.id}
        slide={slide}
      />
    )
  })

  const cards = profileData.map((item) => {
    return(
      <Profile 
        key={item.id}
        item={item}
      />
    )
  })

  const footerLink = FooterData.map((linkItem) => {
    return(
      <Footer 
        key={linkItem.id}
        linkItem = {linkItem}
      />
    )
  })


  return (
    <div className="App">
      <Header />
      <section className='body'>
        <div className='slide-body'>
          <div className='slide-wrapper'>
          {slide }
          </div>
          <div className='filter-wrapper'>
            <FilterCard />
          </div>
          
        </div>

        <div className='Cards-wrapper'>
         {cards}
        </div>
        
      </section>
      <section className='Footer'>
        <div className='Footer-button-wrapper' >
          <button className='Footer__button'>
            Show map
            <i class="bi bi-map-fill Footer-map-icon"></i>
          </button>
          <button className='Footer__button Footer__mobile-button'>
            Map
            <i class="bi bi-map-fill Footer-map-icon"></i>
          </button>
        </div>
        
        <div className='Footer-right-section'>
          <p className='Footer--description'>&#169; 2022 Airbnb, Inc</p>
         {footerLink}
        </div>
        <div className='Footer-left-section'>
         {footerLink}
        </div>
      </section>
      
    </div>
  );
}

export default App;
