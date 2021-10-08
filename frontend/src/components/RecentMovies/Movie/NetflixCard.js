import React from 'react'

import Card from "../../Card"
import Box from "../../Box"
import NetflixButton from "../../NetflixButton"
import Text from '../../Text'
import ImgCard from '../../ImgCard'

import { getDefaultShadow, calculateSizeText } from '../../../helpers'

import { 
    LEFT,
    RED,
    BOTTOM_LEFT
} from '../../../constants/styles'

import logoNetflix from '../../../statics/images/logo.png'
import List from '../../ListItems'

const NetflixCard = ({ 
    orientation, 
    parent_style,
    optionsLogo = null, 
    shows = null, 
    actions = false,
    ...options }) => (
    <Card 
        style = {{ minHeight : '230px' }}
        fill = 'white'
        shadow = { getDefaultShadow() }
        position = 'absolute'
        className = 'padding-movie'
        { ...options }
    >
        { shows && shows.text && <Text
            type = { 'principal' }
            text = { 'Discover a new histories' }
            position = { LEFT }
            color = 'black'
            size = { calculateSizeText(parent_style.width, orientation) }
            align = 'flex-end'
        /> }

        { shows && shows.miniatures && <div
            style = {{
                width : '100%', alignSelf : 'flex-end'
            }}
        >
            <Box
                position = {{
                    position : BOTTOM_LEFT,
                    type : 'relative'
                }}

                style = {{display: 'inline-block'}}
            >
            {
                    !actions 
                        ? 
                            <NetflixButton 
                                text = 'See now'
                                color = { RED }
                                link = '/login'
                            />
                       
                        :
                            <List 
                                items = { actions }
                                iterLogic = {
                                    action => (
                                            <NetflixButton 
                                                text = { action.title }
                                                color = { RED }
                                                link = { action.link }
                                            />

                                    )
                                }
                            />

                }
            </Box>
            
            <Box
                style = {{display: 'inline-block', float: 'right', marginTop: 25}}
            >
                <ImgCard
                    className = 'miniature'
                    image = { logoNetflix }
                    
                />
            </Box>          
        </div> }
    </Card>
)

export default NetflixCard