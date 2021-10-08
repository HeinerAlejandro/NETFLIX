import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import Nav from './Nav'
import Section from './Section'
import { getDefaultShadow } from '../helpers'

import Text from './Text'
import Actions from './Actions'
import NetflixButton from './NetflixButton'

import LogoNetflix from '../statics/images/logo.png'
import BgHeader from '../statics/images/header.jpg'
import Cascade from './Cascade'
import List from './ListItems'

import STREAM from '../statics/images/streaming.svg'  
import SETOP from '../statics/images/setop.svg'
import TABLET from '../statics/images/tablets.svg'
import BLUERAY from '../statics/images/blueray.svg'
import CONTROL from '../statics/images/control.svg'
import PC from '../statics/images/pc.svg'

import '../statics/css/header.css'
import { CENTER, GRAY_SERVICES, header } from '../constants/styles';

class Header extends Component {
    
    constructor(props){

        super()

        this.handleClickNetflixButton = this.handleClickNetflixButton.bind(this)

    }

    handleClickNetflixButton = event => {
        alert('Click en Boton de Header')
    }


    getStylesFromServicesCard = () => (
        {
            backgroundColor : GRAY_SERVICES
        }
    )

    getTextHeader = () => (
        this.props.title
    )

    getBgNetflixCard = (...responsive) => (
        <Card
            className = 'header-netflix-card'
            { ...header.getHeaderNetflixStyles(responsive) }
            bgImage = { LogoNetflix }   
        />
    )

    getFilledCard = (...responsive) => (
        <Card
            className = 'header-filled-card'
            { ...header.getHeaderFilledStyles(responsive) }
            shadow = { getDefaultShadow() }  
        />
    )

    getActions = () => (
        <Actions
            position = { CENTER } 
            style = {{ alignSelf : 'center' }}    
        >

            <NetflixButton 
                width = '200px'
                type = 'rounded'
                color = 'white'
                handleClick = { this.handleClickNetflixButton }
                text = 'LEER MAS'
            />


            <NetflixButton
                width = '200px'
                type = 'rounded'
                color = 'white'
                link = '/login'
                text = 'LOGIN'
            />

        </Actions>
    )

    getServicesSection = () => (
      <Section type = 'list-services'>
        <Card
            width = '100%'
            shadow = { getDefaultShadow() }
        >
            <List 
                items = { this.props.services }
            />  
         </Card>
      </Section>
    )

    getBrandCard = (...responsive) => (
        <Card
            className = 'header-brand-card'
            bgImage = { BgHeader }
            { ...header.getHeaderBrandStyles(responsive) }
        >
        
            <Text
                type = 'principal'
                text = { this.getTextHeader() }
                style = {{ paddingTop : '5%', width : '80%' }}
                size = '8vmin'
                align = 'center'
                position = 'center'
            />

            { this.getActions() }

            { this.getServicesSection() }

        </Card>
    )

    getNav = () => (
        <Nav
            paused
            logo = { LogoNetflix }
        >

        </Nav>
    )

    render() {

        const isMobile = window.screen.width < 576 ? true : false
        const isTablet = window.screen.width >= 576 && window.screen.width < 768 ? true : false
        const isPc = window.screen.width >= 768 ? true : false

        return (
            <Section type = 'header'>

                { this.getNav() }
              
                <Cascade
                    orientation = 'vertical'    
                >
                    
                    { this.getBgNetflixCard(isMobile, isTablet, isPc) }

                    { this.getFilledCard(isMobile, isTablet, isPc) }
                            
                    { this.getBrandCard(isMobile, isTablet, isPc) }

                </Cascade>
                
            </Section>
        )
    }
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
    services : PropTypes.array
}

Header.defaultProps = {
    services : [
        {
            image : STREAM,
            description : 'Streaming Media Players'
        },
        {
            image : CONTROL,
            description : 'Game Consoles'
        },
        {
            image : SETOP,
            description : 'Set-top Boxes'
        },
        {
            image : BLUERAY,
            description : 'Blue-ray Players'
        },
        {
            image : TABLET,
            description : 'Smarthphone & Tablets'
        },
        {
            image : PC,
            description : 'PCs & Laptops'
        }
    ]
}

export default Header
