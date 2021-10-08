import React from 'react'

const Box = ({ children, style }) => (
    
    <div style = {{ ...style  }}>
        { children }
    </div>

)


export default Box
