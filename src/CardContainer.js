import React from 'react';
import Card from './Card';
// import '..Styles/Card.css';

const CardContainer = ({ideasArray}) => {
    return (
        ideasArray.map(( idea, index) => {
            return (
                <Card className="card-container"
                    key={index}
                    idea={idea} 
                />
                )
            })
        )
        }

export default CardContainer;