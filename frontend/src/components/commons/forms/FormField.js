import React from 'react'

import pt from 'prop-types'

import {
    Input,
    Label
} from 'reactstrap'

const FormField = ({ id, type, placeholder, text_field, change }) => (
    <>
        <Label for = { id }>{ text_field }</Label>
        <Input
            type = { type }
            placeholder = { placeholder }
            id = { id }
            onChange = { change }
        />
    </>
)

FormField.propTypes = {
    id : pt.string,
    type : pt.oneOf('text', 'number'),
    placeholder : pt.string,
    text_field : pt.string,
    value : pt.string,
    change: pt.func
}

export default FormField