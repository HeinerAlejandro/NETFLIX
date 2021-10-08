import React from 'react'

import PropTypes from 'prop-types'


const getListItems = children => (
    <div class = 'nav-list-items' >
        { children }
    </div>
)

const Nav = ({ logo, style, children }) => {
    return (
        <nav className = 'nav'>
            <img src = { logo } style = { style } alt = 'img of Card' />

            { children &&  getListItems(children) }

        </nav>
    )
}

Nav.propTypes = {
    logo : PropTypes.string.isRequired,
    logoSize : PropTypes.number,
    style : PropTypes.object,
    children : PropTypes.node
}

export default Nav
