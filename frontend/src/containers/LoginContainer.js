import React from 'react'

import Section from '../components/Section'
import LoginForm from '../components/LoginForm'

import {  } from '../actions/login'

const LoginContainer = () => {
    return (
        <Section
            type = 'login-section'
        >
            <LoginForm />
        </Section>
    )
}

export default LoginContainer
