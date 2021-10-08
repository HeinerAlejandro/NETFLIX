import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import Card from '../Card'
import ImgCard from '../ImgCard'
import Text from '../Text'

import './styles.css'
import { getPosition } from '../../helpers'
import { MARGIN_AUTO } from '../../constants/styles'

const iterFuncDefault = (item, index) => (
    <Item key = { index }>
    
         <Card
            className = 'service'
            hasShadow = { false }
            width = '100%'
        >

            <ImgCard 
                image = { item.image }
                style = {{ height : '128px', ...getPosition(MARGIN_AUTO), padding : '30px 18px 30px 18px' }}
            />

            <Text 
                type = 'principal'
                text = { item.description }
                position = 'center'
                size = '12px' 
                color = 'black'
            />

        </Card>
    </Item>
)

class List extends Component {
   
    static Item = Item

    render() {

        const children =  this.props.items && this.props.items.map(this.props.iterLogic)
        const Wrapped = this.props.wrapped || null

        
        return (
            Wrapped
                ?
                    <Wrapped 
                        className = { `${this.props.className || 'list-items'}` }
                        { ...this.props.propsWrapped }
                    >
                        { children }
                    </Wrapped>
                :
                    <ul 
                        className = { `list-items ${(this.props.propsWrapped && this.props.propsWrapped.className) || '' }` }
                        { ...this.props.propsWrapped }
                    >
                        { children }
                    </ul>
        )
    }
}

List.propTypes = {
    items : PropTypes.array.isRequired,
    iterLogic : PropTypes.func,
}

List.defaultProps = {
    iterLogic : iterFuncDefault,
    items : []
}


export default List



