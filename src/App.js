import benjiSad from './benjiSad.jpeg';
import benjiHappy from './benjiHappy.jpg';
import {useState } from "react";

import './App.css';

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "really really really 10000% sure?",
  "pookie please!",
  "don't do this!!!",
  "i'm gonna cry...",
  "you're gonna break my heart :(",
  "can u see my tears",
  "my heart rn: </3",
  "this is a punch to the gut",
  "P L Z !!!!", 
  "I WONT GIVE UP!"
];

function App() {
  // define all functions to be used 
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length-1)];
  }

  return (
      <div className="valentines-container">
        {yesPressed ? (
          <>
          <img className="benjiHappy" alt="benjiHappy" src={benjiHappy}/>
          <div className="yayText"> YAY!!! :D </div>
          <div>i knew you'd be my valentine</div>
          </>
        ) : (
          <>
          <img className="benjiSad" alt="benjiSad" src={benjiSad}/>
          <div className="questionText">Will you be my valentines?</div>
          <div className="yesNoButtons">
            <button className="yesBtn" style={{ fontSize: yesButtonSize}} onClick={()=>setYesPressed(true)}>Yes</button>
          </div>
          <button className="noBtn" onClick={handleNoClick}>
            {getNoButtonText()}
          </button>
          </>
        )}
      </div>
  );
}

export default App;
