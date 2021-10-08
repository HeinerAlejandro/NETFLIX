import { useState, useCallback } from 'react'

import toast from 'react-hot-toast';

import { fetchLogic, getCustomOptions } from '../api'

import { EMAIL_LINK_REGISTER } from '../constants/api'

export const useSedingEmailHook = () => {

	const [email, setEmail] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const custom_options = { 
		method : 'post',
		headers : {
			'Content-Type' : 'application/json'
		},
		body : JSON.stringify({
			email : email
		})
	}

	const options = getCustomOptions(
		custom_options
	)

	const opSuccess = useCallback(
		response => {
			
			if(!response.ok)
				throw response

			setIsLoading(false)
		}
	)
	
	const opError = useCallback(
		response => {

			setIsLoading(false)

			throw response
		}
	)

	const click = useCallback(() => {
		
		setIsLoading(true)
		
		const promise = Promise.resolve(
			fetchLogic(
				EMAIL_LINK_REGISTER,
				options,
				opSuccess,
				opError
			)
		)

		toast.promise(
			promise,
			{
				loading : `Enviando Link de Registro al Correo Electronico ${email}`,
				success : 'Correo Enviado Correctamente, revise su bandeja de Entrada',
				error : 'Opps...Ha ocurrido un error inesperado, puede deberse a una direccion invalida o problemas de nuestros servidores'
			}
		)
		
	})

	return [isLoading, click, email, setEmail] //Usado para deshabilitar el boton de Netflix
}