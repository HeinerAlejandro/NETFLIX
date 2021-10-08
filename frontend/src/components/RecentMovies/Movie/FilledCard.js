import React from 'react'

import classnames from 'classnames'

import Card from "../../Card"

import Text from '../../Text'

import Tablero from '../../../statics/images/tablero.svg'
import Loading from '../../../statics/images/loading.svg'

import { Season } from '../Season'

import List from '../../ListItems'

import { getDefaultShadow } from '../../../helpers'
import { cardFilledHoverValidate } from '../../../constants/styles'

const Item = List.Item

const FilledCard = (
    { 
        movie,
        current,
        isTabletOrMobile,
        orientation,
        handleClickMiniature,
        handleHover,
        cardFilledHoverValidate,
        handleOnNotHover, 
        handleClick, 
        empty,
        text,
        ...options }) => {
        return(
            !empty
                ? <Card
                    onHover = { cardFilledHoverValidate ? handleHover(movie) : null }
                    onNotHover = { cardFilledHoverValidate ? handleOnNotHover(movie) : null }
                    onClick = { isTabletOrMobile ? handleClick : null}
                    className = {
                        classnames({
                            'card-filled' : true,
                            'card-open' : 
                                    !isTabletOrMobile && current 
                                    ? current.hover 
                                    : false,
                            'card-vertical-open' : current && orientation === 'vertical' && !isTabletOrMobile 
                                    ? current.hover 
                                    : false,
                            'padding-movie' : true
                        }) 
                    }
                    fill = 'red'
                    shadow = { getDefaultShadow() }
                    {  ...options }
                >
                    <img
                        onClick = { handleClickMiniature }
                        alt = 'imagen card'
                        className = 'icon-filled-card'
                        src = { Tablero }
                    />

                    <Text
                        style = {{    
                            overflowY : 'scroll',
                        }}
                        type = 'text'
                        text = { movie.description } 
                        size = '0.8rem'
                        position = 'none-0'
                        align = 'justify'
                        height = { orientation === 'horizontal' ? 100 : 50 }
                        width = '100%'
                    />

            { 
                    typeof movie.seasons === 'string' 
                            ? <div class = 'content-loading'><img src = { Loading } alt = 'loading img' /></div>
                            : <List
                                propsWrapped = {{
                                    className : 'list-items list-seasons'
                                }} 
                                items = { movie.seasons }
                                iterLogic = { (season, index) => (
                                    
                                    <Item
                                        className = 'list-season'
                                        key = { index }
                                    >
                                        <Season
                                            handleClick = { handleClick(season.name) }
                                            key = { index }
                                            season = { season }
                                            selected = { current ? season.name === current.season : false }
                                            number = { index + 1 }     
                                        />
                                    </Item>
                                )}
                            />
                    }
                </Card>
                : <Card 
                    class = 'card-filled'
                    fill = 'red'
                    { ...options }
                /> 
        )
}

FilledCard.defaultProps = {
    handleHover : null,
    cardFilledHoverValidate : cardFilledHoverValidate,
    empty : false
}

export default FilledCard