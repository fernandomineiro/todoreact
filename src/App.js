
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  render(){
    
    return (
      <div class="App">
         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
         
      </div>
     
      
    );
  }
}
export default App;
