import React, { Component } from 'react';
// import logo from './logo.svg';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      ideas : [],
    }
  }

  addIdeas( idea ){
    this.setState( { ideas : [ ...this.state.ideas, idea ] } )
  }

  render() {
    return (
      <div>
        < Form
          addIdeas={ this.addIdeas}/>
      </div>
    );
  }
}

export default App;
