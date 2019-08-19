import React from 'react'
import browser from '../assets/icons/icons-64-violet/browser-64.png'
import customizer from '../assets/icons/icons-64-violet/customizer-64.png'
import desktopChart from '../assets/icons/icons-64-violet/desktop-chart-64.png'
import desktopWindows from '../assets/icons/icons-64-violet/desktop-windows-64.png'
import responsive from '../assets/icons/icons-64-violet/responsive-64.png'
import users from '../assets/icons/icons-64-violet/users-64.png'


function featuresDesigned() {
  	return (
    	<React.Fragment>
			<section className="featuresDesigned">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-8">
							<div className="featuresDesigned-titulo">
								<h2 className="titulo">Features designed for you</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veritatis ratione libero laboriosam aspernatur dolore ad, nesciunt sequi sit voluptatem?</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<div className="featuresDesigned-card">
								<img src={responsive} alt=""/>
								<h4 className="titulo">Responsive <b>Layout Template</b></h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam repudiandae, nesciunt molestiae libero quibusdam.</p>
							</div>
						</div>
						<div className="col-4">
							<div className="featuresDesigned-card">
								<img src={desktopChart} alt=""/>
								<h4 className="titulo"><b>SasS Landing Page</b> Analysis</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam repudiandae, nesciunt molestiae libero quibusdam.</p>
							</div>
						</div>
						<div className="col-4">
							<div className="featuresDesigned-card">
								<img src={browser} alt=""/>
								<h4 className="titulo"><b>Smart</b> BEM <b>Grid</b></h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam repudiandae, nesciunt molestiae libero quibusdam.</p>
							</div>
						</div>
						<div className="col-4">
							<div className="featuresDesigned-card">
								<img src={desktopWindows} alt=""/>
								<h4 className="titulo"><b>Multiple</b> Unique <b>Designs</b></h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam repudiandae, nesciunt molestiae libero quibusdam.</p>
							</div>
						</div>
						<div className="col-4">
							<div className="featuresDesigned-card">
								<img src={customizer} alt=""/>
								<h4 className="titulo">Flexible <b>HTML Sections</b></h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam repudiandae, nesciunt molestiae libero quibusdam.</p>
							</div>
						</div>
						<div className="col-4">
							<div className="featuresDesigned-card">
								<img src={users} alt=""/>
								<h4 className="titulo"><b>User</b> Friendly</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam repudiandae, nesciunt molestiae libero quibusdam.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
    	</React.Fragment>
  	)
}

export default featuresDesigned
