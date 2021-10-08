import React from 'react'
import Text from '../Text'
import { RED, LEFT } from '../../constants/styles'


const EntryTitle = ({ title, color, style }) => (
   
    <div style = {{ maxHeight : '100px', ...style}}>
        <Text
            text = { title.toUpperCase() }
            color = { color }
            size = '1.5rem'
            width = '250px'
            position = { LEFT }
            style = {{borderLeft : `3px solid ${RED}`}}
        />
    </div>
    
)

export default EntryTitle
