import React from 'react'

export const LABEL = 'LABEL'
export const TEXT = 'TEXT'
export const NUMBER = 'NUMBER'
export const PASSWORD = 'PASSWORD'
export const EMAIL = 'EMAIL'

const getLabel = ( { name, forElement }, options ) => ( <label htmlFor = { forElement } { ...options }>{ name }</label> )
const getInput = ( type = TEXT , options ) => ( <input type = { type } {...options} /> )

export const getField = ({ type }, ...options) => {

    switch(type){
        case LABEL:
            return getLabel(options)
        case TEXT | PASSWORD | NUMBER :
            return getInput(type, options)
    }

}