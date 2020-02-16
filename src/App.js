import React from 'react';
import './App.scss';
import ViewScreen1 from './components/screen1/ViewScreen1';
import ViewScreen2 from './components/screen2/ViewScreen2';
import ViewScreen3 from './components/screen3/ViewScreen3';
import ViewScreen4 from './components/screen4/ViewScreen4';
import ViewScreen5 from './components/screen5/ViewScreen5';
import ViewScreen6 from './components/screen6/ViewScreen6';
import ViewScreen7 from './components/screen7/ViewScreen7';
import ViewScreen8 from './components/screen8/ViewScreen8';
import Navigate from './components/navigate/ViewNavigate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {screen: 1};
    this.nextScreen = this.nextScreen.bind(this)
  }

  nextScreen(){
    if(+this.state.screen != 8){
      this.setState({screen: +this.state.screen+1})
    }else{
      this.setState({screen: 1})  
    }
    console.log("screen",this.state.screen); 
    this.showNextScreen();
  }

  showNextScreen(){
    for (let i = 1; i <= 8; i++){
      if(i < this.state.screen){
        document.getElementById("screenID"+i).classList.add("pre-activeScreen"); 
        document.getElementById("screenID"+i).classList.remove("activeScreen");
      } else {
        document.getElementById("screenID"+i).classList.add("activeScreen"); 
        document.getElementById("screenID"+i).classList.remove("pre-activeScreen");
      }
    }
  }

  render(){
    return (
      <>
        <div id="backgroudnFullPage" className="backgroudnFullPage">
          <ViewScreen1 screen={this.state.screen} nextScreen={this.nextScreen}/>
          <ViewScreen2 screen={this.state.screen} nextScreen={this.nextScreen}/>
          <ViewScreen3 screen={this.state.screen} nextScreen={this.nextScreen}/>
          <ViewScreen4 screen={this.state.screen} nextScreen={this.nextScreen}/>
          <ViewScreen5 screen={this.state.screen} nextScreen={this.nextScreen}/>
          <ViewScreen6 screen={this.state.screen} nextScreen={this.nextScreen}/>
          <ViewScreen7 screen={this.state.screen} nextScreen={this.nextScreen}/>
          <ViewScreen8 screen={this.state.screen} nextScreen={this.nextScreen}/>
        </div>
        <Navigate/>
      </>
    );
  }
}