import React from 'react'

function MenuHeader() {
  	return (
    	<React.Fragment>
			<div className="menuHeader">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-4">
                            <div className="menuHeader-logo">lateral</div>
                        </div>
                        <div className="col-8">
                            <nav className="menuHeader-nav">
                                <ul>
                                    <li className="active"><a href={'./'}>home</a></li>
                                    <li className="dropdown"><a href={'./'}>features</a></li>
                                    <li><a href={'./'}>pricing</a></li>
                                    <li><a href={'./'}>contact</a></li>
                                    <li><a className="btns btns-3" href={'./'}>login</a></li>
                                    <li><a className="btns btns-7" href={'./'}>get started</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
    	</React.Fragment>
  	)
}

export default MenuHeader
