import React from 'react'

import facebook from '../assets/social/black/facebook.png'
import linkedin from '../assets/social/black/linkedin.png'
import twitter from '../assets/social/black/twitter.png'

function Footer() {
  	return (
    	<React.Fragment>
			<section className="footer">
				<div className="footer-top">
					<div className="container position-relative">
						<span className="pentagono"></span>
						<div className="row">
							<div className="col-12">
								<h3>Start <b>growing</b> your bussiness.</h3>
							</div>
							<div className="col-6">
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam numquam quis facere assumenda debitis doloribus sed non itaque architecto doloremque, perspiciatis totam quaerat vel officiis placeat ad voluptates nobis porro veritatis asperiores dolorem odit soluta ex. Voluptatem eligendi quis commodi.</p>
							</div>
							<div className="col-6">
								<a className="btns btns-1" href={'./'}>get started now</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-4">
								<h5>LATERAL</h5>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, itaque?</p>
								<div className="footer-bottom-imgs">
									<img src={twitter} alt=""/>
									<img src={facebook} alt=""/>
									<img src={linkedin} alt=""/>
								</div>
							</div>
							<div className="col-8">
								<div className="footer-bottom-links">
									<div className="footerLink">
										<h5>Company</h5>
										<ul>
											<li><a href={'./'}>about</a></li>
											<li><a href={'./'}>carrers</a></li>
											<li><a href={'./'}>awards</a></li>
											<li><a href={'./'}>users programs</a></li>
											<li><a href={'./'}>locations</a></li>
										</ul>
									</div>
									<div className="footerLink">
										<h5>Products</h5>
										<ul>
											<li><a href={'./'}>integrations</a></li>
											<li><a href={'./'}>API</a></li>
											<li><a href={'./'}>pricing</a></li>
											<li><a href={'./'}>documentation</a></li>
											<li><a href={'./'}>release notes</a></li>
										</ul>
									</div>
									<div className="footerLink">
										<h5>Support</h5>
										<ul>
											<li><a href={'./'}>contact</a></li>
											<li><a href={'./'}>FAQ</a></li>
											<li><a href={'./'}>press</a></li>
										</ul>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    	</React.Fragment>
  	);
}

export default Footer
