import { LABEL, TEXT, PASSWORD } from "../../constants/form"

import {

    usernameUnique,
    usernameLength,
    passwordLength,
    passwordWords

} from '../validators'

export const LoginForm = {
    options : {
        className : 'form'
    },
    fields :  [
        {
            type : LABEL,
            name : 'username',
            forElement : 'username',
        },
        {
            type : TEXT,
            name : 'username',
            validators : {
                onChange : [
                    usernameLength
                ],
                onSubmit : [
                    usernameUnique
                ]
            }, 
            options : {
                className : 'form-input'
            }
        },
        {
            type : LABEL,
            name : 'password',
            for : 'password'
        },
        {
            type : PASSWORD,
            name : 'password',
            validators : {
                onChange : [
                    passwordLength,
                    passwordWords
                ]
            },
            options : {
                className : 'form-input'
            }
        }
    
    ]
}