import React from 'react'

import { useMediaQuery } from "react-responsive";
import Section from '../Section'

import ContentRegisterForm from './contentRegisterForm'
import Image from './Image'
import FilledCustomCard from './FilledCustomCard'

import Cascade from '../Cascade'

import { getDefaultShadow } from '../../helpers'

import './styles.css'

const RegisterSection = props => {  

    return(
        <Section
            type = 'register-section'
            classname = 'section-padding'
        >
            <Cascade
                orientation = 'horizontal'
            >
                <Image />
                <FilledCustomCard />
                <ContentRegisterForm />
            </Cascade>
        </Section>
    )
}

export default RegisterSection
