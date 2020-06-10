import React from 'react'
import girlImage from './images/girl.png'

function Home(props) {
	console.log('props', props)
	return (
		<div>
			<img src={girlImage} alt="girl" style={{width:300}}/>
		</div>
	)

}
export default Home