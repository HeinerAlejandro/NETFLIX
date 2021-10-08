import { LABEL, TEXT, PASSWORD, GMAIL } from "../../constants/form";
import {

    usernameUnique,
    usernameLength,
    passwordLength,
    passwordWords,
    emailUnique,
    passwordCompareWithConfirm

} from '../validators'

export const RegisterForm = {
    options : {
        className = 'form'
    },
    fields :[
        {
            type : LABEL,
            name : 'username',
            for : 'username_r'
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
            }
        },
        {
            type : LABEL,
            name : 'email',
            for : 'email_r'
        },
        {
            type : EMAIL,
            name : 'email',
            validators : {
                onSubmit : [
                    emailUnique
                ]
            }
        },
        {
            type : LABEL,
            name : 'first_name',
            for : 'first_name'
        },
        {
            type : TEXT,
            name : 'first_name',
        },
        {
            type : LABEL,
            name : 'last_name',
            for : 'last_name'
        },
        {
            type : TEXT,
            name : 'last_name',
        },
        {
            type : LABEL,
            name : 'password',
            for : 'password_r'
        },
        {
            type : PASSWORD,
            name : 'password',
            validators : {
                onChange : [
                    passwordLength,
                    passwordWords,
                    passwordCompareWithConfirm
                ]
            }
        },
        {
            type : LABEL,
            name : 'confirm',
            for : 'confirm'
        },
        {
            type : PASSWORD,
            name : 'confirm',
            validators : {
                onChange : [
                    passwordCompareWithConfirm
                ]
            }
        }
    ]   
}