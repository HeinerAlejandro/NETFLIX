import React from 'react'

import Card from '../Card'
import RegisterForm from './RegisterForm'

const ContentRegisterForm = ({ children }) => {
	return(
		<Card
			withLogo
			optsLogo = {{
				marginLeft : '40%'
			}}
			position = 'absolute'
			left = '45vw'
			width = '50vw'
			height = '400px'
			align = 'center'
			direction = 'column'
			padding = '50px 0px 50px 50px'
		>
			<RegisterForm 
				styles = {{
					width : '50%',
					marginLeft : '20%'
				}}
			/>
		</Card>
	)
}

export default ContentRegisterForm