import './AppStyle.css';
import QuestionStructure from './QuestionStructure';
import data from './Data';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState({});

  function SelectedOptionHandler(option) {
    setTheme(data[option]);
  }

  function nullTheme() {
    setTheme({});
  }

  return (
    <div className="main-box">
      {theme.theme === undefined ?
        <div>
          <p id="selectTheme">Select a theme to start!</p>
          <div className="options-div">
            {data.map((indexValue, index) => {
              return <div key={index} className="single-option">
                <button onClick={() => { SelectedOptionHandler(index) }}>
                  <img src={indexValue.imgOfTheme} />
                </button>
                <p>{indexValue.theme}</p>
              </div>
            })}
          </div>
        </div>
        :
        <QuestionStructure {...theme} nullTheme={nullTheme} />
      }
    </div>
  );
}

export default App;
