import React from 'react'
import { RED } from '../constants/styles'

function Category({ text }) {
    return (
        <div style = {{
            padding : '5px 8px 5px 8px',
            marginRight : '5px',
            borderRadius : '10px',
            backgroundColor : RED,
            display : 'inline-block',
            color : 'white',
            fontSize : '0.8em'
        }}>
            { text }
        </div>
    )
}

export default Category
