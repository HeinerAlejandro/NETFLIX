import React from 'react'

import { Container, Row, Col, Form, Input, FormGroup, Label } from 'reactstrap'
import { RED, WHITE } from '../../constants/styles'
import NetflixButton from '../NetflixButton'

const Body = () => {
    return (
        <Container>
            <Row >
                <Col
                    lg = {{
                        size : 4,
                        offset : 4
                    }}
                >
                    <Form
                        id = 'login-form'
                    >
                    <FormGroup>
                            <Label 
                                for = "email-field" 
                            >
                                    Email : 
                            </Label>
                            <Input
                                type = 'email'
                                id = 'email-field'
                                name = 'email'
                                placeholder = 'email'
                            />
                    </FormGroup>
                    <FormGroup>
                            <Label 
                                for = "password-field" 
                            >
                                    Contraseña : 
                            </Label>
                            <Input
                                type = 'password'
                                id = 'password-field'
                                name = 'password'
                                placeholder = 'contraseña'
                            />
                    </FormGroup>
                    <NetflixButton
                            margin = '0'
                            text = 'Logueate'
                            fill = { RED }
                            color = { WHITE }
                            width = '100%'
                            type = 'rounded'
                        />
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col 
                    lg = {{offset : 4}}
                
                >
                    <NetflixButton
                        link = '/register'
                        text = '¿no tienes cuenta?'
                        strongBorder = { 0 }
                        margin = { 0 }
                        color = { RED }
                    />
                    
                </Col>
                <Col>
                    <NetflixButton
                        link = '/register'
                        text = '¿has olvidado tu contraseña?'
                        strongBorder = { 0 }
                        color = { RED }
                        margin = { 0 }
                    />
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Body