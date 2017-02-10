import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        // <div className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        // </div>
        <h1 className="App-intro">
          Can chromesthesia be acquired?
        </h1>
        <p id="pExplain">Your job is just to click notes below (whether you are playing a song or being random) and watch the background color change in response. Try playing a few times a day for just a few minutes. If you think you have begun acquiring any level of synesthesia, find ways to test yourself (like writing or transribing a melody with colors.)</p>

      <section>
          <div className="notes">
              <p id="c" onClick={red} >C</p>
              <p id="cSharp" onClick={redOrange} >C#/Db</p>
              <p id="d" onClick={orange} >D</p>
              <p id="dSharp" onClick={orangeYellow} >D#/Eb</p>
              <p id="e" onClick={yellow} >E</p>
              <p id="f" onClick={yellowGreen} >F</p>
              <p id="fSharp" onClick={green} >F#/Gb</p>
              <p id="g" onClick={greenBlue} >G</p>
              <p id="gSharp" onClick={blue} >G#/Ab</p>
              <p id="a" onClick={blueViolet} >A</p>
              <p id="aSharp" onClick={violet} >A#/Bb</p>
              <p id="b" onClick={violetRed} >B</p>
              <p id="c8va" onClick={red2} >C</p>
          </div>
      </section>
      <audio id="0" src="c.mp3" type="audio/wav"></audio>
      <audio id="1" src="cSharp.mp3" type="audio/wav"></audio>
      <audio id="2" src="d.mp3" type="audio/wav"></audio>
      <audio id="3" src="dSharp.mp3" type="audio/wav"></audio>
      <audio id="4" src="e.mp3" type="audio/wav"></audio>
      <audio id="5" src="f.mp3" type="audio/wav"></audio>
      <audio id="6" src="fSharp.mp3" type="audio/wav"></audio>
      <audio id="7" src="g.mp3" type="audio/wav"></audio>
      <audio id="8" src="gSharp.mp3" type="audio/wav"></audio>
      <audio id="9" src="a.mp3" type="audio/wav"></audio>
      <audio id="10" src="aSharp.mp3" type="audio/wav"></audio>
      <audio id="11" src="b.mp3" type="audio/wav"></audio>
      <audio id="12" src="c8va.mp3" type="audio/wav"></audio>
      </div>
    );
  }
}

function red(){
  document.getElementById('0').play();
  document.body.style.background = '#e00000';
  setTimeout(white, 1000);
}
function red2(){//this makes the same color as the c note but plays a note an octave higher
  document.getElementById('12').play();
  document.body.style.background = '#e00000';
  setTimeout(white, 1000);
}
function redOrange(){
  document.getElementById('1').play();
  document.body.style.background = '#ff2900';
  setTimeout(white, 1000);
}
function orange(){
  document.getElementById('2').play();
  document.body.style.background = '#ff5300';
  setTimeout(white, 1000);
}
function orangeYellow(){
  document.getElementById('3').play();
  document.body.style.background = '#ff9500';
  setTimeout(white, 1000);
}
function yellow(){
  document.getElementById('4').play();
  document.body.style.background = '#f8ff00';
  setTimeout(white, 1000);
}
function yellowGreen(){
  document.getElementById('5').play();
  document.body.style.background = '#00d804';
  setTimeout(white, 1000);
}
function green(){
  document.getElementById('6').play();
  document.body.style.background = '#00a207';
  setTimeout(white, 1000);
}
function greenBlue(){
  document.getElementById('7').play();
  document.body.style.background = '#006968';
  setTimeout(white, 1000);
}
function blue(){
  document.getElementById('8').play();
  document.body.style.background = '#009afd';
  setTimeout(white, 1000);
}
function blueViolet(){
  document.getElementById('9').play();
  document.body.style.background = '#160068';
  setTimeout(white, 1000);
}
function violet(){
  document.getElementById('10').play();
  document.body.style.background = '#730065';
  setTimeout(white, 1000);
}
function violetRed(){
  document.getElementById('11').play();
  document.body.style.background = '#aa0062';
  setTimeout(white, 1000);
}
function white(){
  document.body.style.background = '#fff';
}
export default App;
