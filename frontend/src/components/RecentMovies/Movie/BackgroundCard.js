import React from 'react'

import Card from "../../Card"

import ImgCard from '../../ImgCard'

import Text from '../../Text'

import { getDefaultShadow } from '../../../helpers'

const BackgroundCard = ({ presentation, text = {}, style = {}, image_style = {}, ...options }) => (
    <Card
        paused = { true }
        fill = 'black'
        position = 'relative'
        shadow = { getDefaultShadow() }
        { ...options }
    >
        {   presentation
            &&  <ImgCard 
                    image = { presentation.src }
                    style = { image_style }
                />
            || <>
                <Text 
                    text = { text.text.text } 
                    { ...text.text.options }
                />
                <Text 
                    text = { text.subtext.text }
                    { ...text.subtext.options }
                />
            </>    
        }
    </Card>
)

export default BackgroundCard