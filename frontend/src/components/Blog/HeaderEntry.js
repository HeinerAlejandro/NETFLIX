import React from 'react'
import Card from '../Card'
import { RED } from '../../constants/styles'
import Text from '../Text'

const HeaderEntry = ({ presentation, title, handleClickClose }) => {
    return (
        <div>
            <img 
                className = 'mb-5'
                alt = 'header entry' 
                style = {{ width : '100%' }} 
                src = { presentation } 
            />
            <Card className = 'padding-movie' fill = { RED }>
                <Text 
                    text = { title }
                    type = 'secondary'
                    size = { 25 }
                />
            </Card>
        </div>
    )
}

export default HeaderEntry
