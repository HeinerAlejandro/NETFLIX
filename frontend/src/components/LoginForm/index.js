import React from 'react'

import Modal from '../modal'

import Header from './Header'
import Body from './Body';

import './styles.css'

const LoginFormNetflix = ({isOpen}) => {
    return (
        <Modal
            classname = 'modal-login'
            isOpen = { true }
            header = {() => <Header /> }
            body = {() => <Body /> }
            footer = {() => {}}
        />
    )
}

export default LoginFormNetflix
