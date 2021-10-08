import React from 'react'

import classnames from 'classnames'

import Capitule from '../Movie/Capitule'
import List from '../../ListItems'
import Card from '../../Card'
import { getDefaultShadow, findData } from '../../../helpers'
import { cardCapOpenValidate } from '../../../constants/styles'
import close from './../../../statics/images/close.svg'

const Item = List.Item

const iterLogic = capitule => (
    <Item
        className = 'list-capitule'
    >
        <Capitule
            capitule = { capitule }
        />
    </Item>
)

const CapitulesCard = ({
    movie,
    capitules,
    orientation,
    handleClickClose,
    current,
    style = {},
    ...options
}) => 
    (
        <Card
            className = { classnames({
                'card-cap-open' : cardCapOpenValidate(current) 
                    && findData(movie.seasons, 'name', current.season),
                'card-cap-open-left' : cardCapOpenValidate(current)
                    && current.capVerticalDir === 'left'
                    && orientation === 'vertical'
                    && findData(movie.seasons, 'name', current.season),
                'card-cap' : true
            }) }
            paused
            fill = 'white'
            style = { style }
            left = { 25 }
            shadow = { getDefaultShadow() }
            { ...options }
        >
            <div className = 'close-icon'><img alt = 'close icon' onClick = { handleClickClose } src = { close } /></div>
            <List
                propsWrapped = {
                    {
                        style : { overflowY : 'scroll' }
                    }
                }
                items = { capitules }
                iterLogic = { iterLogic }
            />
        </Card>
    )



export default CapitulesCard