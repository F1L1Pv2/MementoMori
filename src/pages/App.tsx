import React from 'react';
import '../App.css';
import {motion,LayoutGroup,AnimatePresence} from 'framer-motion';

function App() {
  //create array with 52*100 elements

  const urlParams = new URLSearchParams(window.location.search);

  const urlParameter = urlParams.get('birthYear');
  const urkdarkMode = urlParams.get('darkMode');

  const darkMode = !(urkdarkMode === 'true');

  
  //get 80% of the screen width
  const screenWidth = window.innerWidth * 0.74;
  
  const first = Array.from(Array(5200).keys());
  
  const currentDate = new Date();
  const birthYear = urlParameter ? parseInt(urlParameter) : currentDate.getFullYear();
  const startDate = new Date(birthYear,0 ,0);
  const currentWeekDiff = Math.ceil((currentDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24 * 7));

  


  const data= first.map((item) => {
    
    let done = false;
    if (item > currentWeekDiff-4) {
      done = true;
    }
    
    return (
      <motion.div 
      className={darkMode? (done ? 'Card': 'CardDone') : (done ? 'darkCard': 'darkCardDone')}
      layoutId={`${item}`}
      key={item}
      style={{
        width: screenWidth/52,
        height: screenWidth/52,
        borderRadius: "50%",
        
      }}
      >
      </motion.div>
    )
  });

  return (
    <div className={darkMode? "App": "App darkModeB"}>
      <div className='AppHeader'>
        <h1 className='AppHeaderH1'
        style={{color: darkMode? "black": "white"}}>CALENDAR OF YOUR LIFE</h1>
        <h2 className='AppHeaderH2' style={{color: darkMode? "black": "white"}}>TIME IS LIMITED AND PRECIOUS. HOW DO YOU WANT TO SPEND IT?</h2>
      </div>
      <div>
        <p style={{color: darkMode? "black": "white"}}>
          You have lived for {currentWeekDiff} weeks.
          You have {5200 - currentWeekDiff} weeks left.
        </p>
      </div>
      <div className="Hero">
      <div className='YearsContainer'>
          {
            Array.from(Array(100).keys()).map((i)=>{
              return(
                <div className='Year'
                  style={{
                    height: screenWidth/52,
                    width: screenWidth/52,
                    borderRadius: "50%",
                    border: "1px solid transparent",
                    marginRight: "20px",
                    color: darkMode? "black": "white",
                  }}
                >
                  <p className="YearP">{birthYear+i}</p>
                </div>
              )
            })
          }
      </div>
      <div className='CardContainer'>
        <AnimatePresence>
          <LayoutGroup>
            {data}
          </LayoutGroup>
        </AnimatePresence>
      </div>
      </div>
    </div>
  );
}

export default App;
