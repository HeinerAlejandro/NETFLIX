import React from 'react'
import { getField } from '../constants/form'

import PropTypes from 'prop-types'

class DinamicForm extends React.Component{


    getField = field => ( getField(field) )
    
    getFieldsOfJson = () => (
        <>
            {
                this.props.layout.fields.map(
                    field => ( this.getField(field) )
                )
            }
        </>
    )

    render(){
        return (
            <form
                className = { this.props.layout.options.className }
                onSubmit = { this.props.handleSubmit }
                name = { this.props.name }
            >
                { this.getFieldsOfJson() }

                <button type = 'button' value = 'Enviar'/>
            </form>
        )
    }
}

DinamicForm.propTypes = {
    layout : PropTypes.object.isRequired,
    handleSubmit : PropTypes.func,
    name : PropTypes.string.isRequired,
}

DinamicForm.defaultProps = {
    getField : getField
}

export default DinamicForm
