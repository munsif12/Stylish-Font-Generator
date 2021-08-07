import React, { useState } from "react";
import "./App.css";
import bgImage from "./asset/bgImg.png";
import { stylesArray } from "./data/FontFamily";
function App() {
  console.log(stylesArray);
  const [userText, setuserText] = useState("");
  return (
    <div className="App" style={{ background: `url(${bgImage})` }}>
      <div className="content_wrapper">
        <div className="formWrapper">
          <form>
            <input
              type="text"
              name="userText"
              value={userText}
              onChange={(e) => setuserText(e.target.value)}
              placeholder="Enter text here..."
            />
          </form>
        </div>
        <div className="resultsWrapper">
          {userText ? (
            stylesArray.map((style, i) => {
              return (
                <div
                  className="textResults"
                  key={i}
                  style={{
                    fontFamily: style,
                  }}
                >
                  {userText}
                  {/* <abbr title={style}>{userText}</abbr> */}
                  <p></p>
                </div>
              );
            })
          ) : (
            <h1>PLease Write Something!</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
