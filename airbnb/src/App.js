import './App.css'
import Header from './components.js/Header'
import Slide from './components.js/Slide'
import SlideData from './components.js/SlideData'
import Profile from './components.js/Profile'
import profileData from './components.js/ProfileData';
import FilterCard from './components.js/FilterCard'

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
      
    </div>
  );
}

export default App;
