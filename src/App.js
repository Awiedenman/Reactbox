import React, { Component } from 'react';
import CardContainer from './CardContainer';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      ideasArray : [],
    }
  }

  addIdeas = ( idea ) => {
    const newIdea = { ...idea, id: Date.now() }
    this.setState( { ideasArray : [...this.state.ideasArray, newIdea] } )
  }

  render() {
    return (
      <div>

        < Form
          addIdeas={ this.addIdeas } />
        <CardContainer 
          ideasArray={ this.state.ideasArray } />

      </div>
    );
  }
}

export default App;
