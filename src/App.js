import React, { Component } from 'react';
import CardContainer from './CardContainer';
import Form from './Form';
import './App.css';
// import Card from './Card';

class App extends Component {
  constructor(){
    super();
    this.state = {
      ideasArray : [],
    }
  }

  addIdeas = ( idea ) => {
    const newIdea = { ...idea, id: Date.now() }
    localStorage.setItem(newIdea.id, JSON.stringify([...this.state.ideasArray, newIdea]));
    this.setState( { ideasArray : [...this.state.ideasArray, newIdea] } )
  }

  deleteIdea = ( id ) => {
  console.log(id)
    localStorage.removeItem(id);
    const updatedIdeas = this.state.ideasArray.filter( idea => {return idea.id !== id})
    this.setState( { ideasArray : updatedIdeas})    
  }

  componentDidMount(){
    //loop through local storage
    //set it to a variable
    //set state
    //  components will rerender once state is set
  }

  render() {
    return (
      <div>
        < Form
          addIdeas={ this.addIdeas } 
        />
        <CardContainer 
          ideasArray={ this.state.ideasArray }
          deleteIdea={ this.deleteIdea }
        />
      </div>
    );
  }
}

export default App;
