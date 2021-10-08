import React from 'react'
import Text from '../Text'

import classnames from 'classnames'

export const Season = props => {

    const handleClick = event => {

        props.handleClick(event)

        let target = event.target

        let cards = target
            .closest('.movie-item')
        
        let cardCap = cards.querySelector('.card-cap')
        
        cardCap.className = classnames({
            'card-netflix' : true,
            'card-cap-open' : true,
            'card-cap' : true
        })

    }

    return (
        <div 
            onClick = { handleClick }
            class = { classnames({
                season : true,
                'season-selected' : props.selected,
            })}
        >
            <div class = 'season-title'>
                <Text
                    type = 'secondary'
                    size = '0.8'
                    text = { `Season ${ props.number } : ${ props.season.name }` }
                />
            </div>
        </div>
    )
}
