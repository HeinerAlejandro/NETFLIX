import React from 'react'
import ImgCard from './ImgCard'
import Box from './Box'
import DinamicForm from './DinamicForm';
import LogoNetflix from '../statics/images/logo.png'
import { TOP } from '../constants/styles';

const RegisterForm = () => {
    return (
        <div>
            <Box
                position = { TOP }
            >
                <ImgCard image = { LogoNetflix } />
            </Box>

            <DinamicForm 
                layout = { RegisterForm }
                handleSubmit = { () => {} }
                name = { 'register_form' }
            />
        </div>
    )
}

export default RegisterForm
