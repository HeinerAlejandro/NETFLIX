import React from 'react'

import FilledCard from '../RecentMovies/Movie/FilledCard'

const options = {
	width : '20vw',
	height : '400px',
	position : 'absolute',
	left : '43vw',
	clipPath : 'Polygon(0% 0%, 100% 0, 32% 100%, 0% 100%)'
}

const FilledCustomCard = (prop) => {
	return (
		<FilledCard 
			empty = { true }
			{ ...options }
		/>
	)
}

export default FilledCustomCard