import React from 'react'
import BuildApplications from '../components/buildApplications'
import MenuHeader from '../components/menuHeader'

import bg from '../assets/bg-1.png'

function Header() {
  	return (
    	<React.Fragment>
			<section className="header">
				<img className="imgBg" src={bg} alt="" />
				<MenuHeader />
				<BuildApplications />
			</section>
    	</React.Fragment>
  	)
}

export default Header
