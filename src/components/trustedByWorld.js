import React from 'react'
import map from '../assets/world-bg.png'
import person1 from '../assets/avatar-1.jpg'
import person2 from '../assets/avatar-2.jpg'
import person3 from '../assets/avatar-3.jpg'
import person4 from '../assets/avatar-4.jpg'
import person5 from '../assets/avatar-5.jpg'
import person6 from '../assets/avatar-6.jpg'

function TrustedByWorld() {
  	return (
    	<React.Fragment>
			<section className="trustedByWorld">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-block">
                            <div className="trustedByWorld-titulo">
                                <h2 className="titulo">Trusted by world experts</h2>
                            </div>
                            <img className="trustedByWorld-imgBg" src={map} alt=""/>
                            <div className="trustedByWorld-img">
                                <img className="imgCircle imgCircle1" src={person1} alt=""/>
                                <img className="imgCircle imgCircle2" src={person2} alt=""/>
                                <img className="imgCircle imgCircle3" src={person3} alt=""/>
                                <img className="imgCircle imgCircle4" src={person4} alt=""/>
                                <img className="imgCircle imgCircle5" src={person5} alt=""/>
                                <img className="imgCircle imgCircle6" src={person6} alt=""/>
                                <img className="imgCircle imgCircle7" src={person2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    	</React.Fragment>
  	)
}

export default TrustedByWorld