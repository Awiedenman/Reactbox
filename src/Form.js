import React, { Component } from "react";

class Form extends Component {
    constructor( props ) {
        super();
        this.state = {
            title : '',
            body : ''
        }
    }

    handleInput = ( e ) => {
        const{ name, value } = e.target
        this.setState( {this.state[name] : value} );
    }

    submitIdea = (e) => {
        e.preventDefault()
        this.props.addIdeas(this.state )
    }

    render () {
        return(
        <div>
            <header className="user-form">
                <form className="user-form-container">
                    <h1 className="user-form__title-idea">idea
                        <span className="user-form__title-box">box</span>
                    </h1>
                    <input 
                        type="text" 
                        className="user-form__input user-form__input-title"
                        placeholder="title" 
                        onChange={this.handleInput} 
                        name="title"
                        value={this.state.title} 
                    />
                    <input
                        type="text" 
                        className="user-form__input user-form__input-body"
                        placeholder="body"
                        onChange={this.handleInput} 
                        name="body"
                        value={this.state.body}
                    />
                    <button
                        className="user-form__button-save" 
                        onClick={this.submitIdea}
                        name="body">
                    </button>
                </form>
            </header>
        </div>
        )
    }
}

export default Form;