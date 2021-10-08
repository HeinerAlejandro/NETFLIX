import React from 'react'
import PropTypes from 'prop-types'

import {
    Form,
    FormGroup,
    Col,
} from 'reactstrap'

import { Toaster } from 'react-hot-toast';

import NetflixButton from '../../NetflixButton'

import FormField from '../../commons/forms/FormField'

import { RED, WHITE } from '../../../constants/styles'

import { useSedingEmailHook } from '../../../hooks'

const RegisterForm = ({ styles }) => {

    const [isLoading, click, email, setEmail] = useSedingEmailHook() 

    const handleClick = event => click()
    const handleChange = event => setEmail(event.target.value)

    return (
        <>
            <Form
                style = { styles }
            >
                <FormGroup row>
                    <Col className = 'mt-3' lg = { 12 }>
                        <FormField 
                            id = 'email'
                            type = 'email'
                            placeholder = 'Email'
                            change = { handleChange }
                        />
                    </Col>
                </FormGroup>
                <NetflixButton
                    disabled = { isLoading || email.length === 0 }
                    type = 'rounded'
                    click = { handleClick }
                    change = { handleChange }
                    margin = {0}
                    fill = { RED }
                    color = { WHITE }
                    text = 'REGISTRATE'
                    width = '100%'
                />
            </Form>
            <Toaster />
        </>
    )
}

RegisterForm.propTypes = {
    styles : PropTypes.object
}

export default RegisterForm
