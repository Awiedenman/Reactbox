import React from 'react';

const Card = ( props ) =>  {
  // console.log(props)
    return (
      <div id={props.id}>
        <h1>{props.title}</h1>
        <h2>{props.body}</h2>
        <button onClick ={ ()=> props.deleteIdea(props.id) } ></button>
      </div>
    )
}
export default Card;