import React from 'react';
import Card from './Card';
// import '..Styles/Card.css';

const CardContainer = ({ideasArray, deleteIdea}) => {
    // console.log(props)
    const ideaMaker = ideasArray.map(( idea, index) => {
        return (
                <Card className="card-container"
                    key={index}
                    {...idea} 
                    deleteIdea={ deleteIdea }
                />
                )
    })
    return (
        <div>
            {ideaMaker}
        </div>
        )
}

        

export default CardContainer;