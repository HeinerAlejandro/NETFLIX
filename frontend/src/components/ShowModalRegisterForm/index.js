import React from 'react'

import {
    Container,
    Row,
    Col
} from 'reactstrap'

import Section from '../Section'
import Modal from '../modal'
import RegisterForm from '../RegisterSection/RegisterForm'

const ShowModalRegisterForm = props => (
    <Section
        type = 'modal-register-section'
    >
            <Modal 
                isOpen = { true }
                header = { () => <h3 className = 'text-center'>Registrate y disfruta de cientos de series y peliculas</h3> }
                body = { () => (
                    <Container>
                        <Row>
                            <Col lg = {{
                                size : 6,
                                offset : 3
                            }}>
                                <RegisterForm />
                            </Col>
                        </Row>
                    </Container>
                )}
                footer = { () => {} }
            />
    </Section>
)

export default ShowModalRegisterForm
