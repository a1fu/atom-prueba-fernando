import React from 'react'

function FlexiblePricing() {
  	return (
    	<React.Fragment>
			<section className="flexiblePricing">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <div className="flexiblePricing-titulo">
                                <h2 className="titulo">Flexible Pricing</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi perferendis quo iste voluptatibus illo fuga enim est repellat laudantium quaerat!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="flexiblePricing-bx">
                            <div className="flexiblePricing-bx-body">
                                <div className="flexiblePricing-bx-header">
									<button className="btn-1 active" type="button" href={'./'}>Monthly</button>
									<button className="btn-1" type="button" href={'./'}>Yearly</button>
                                </div>
                                <div className="flexiblePricing-bx-footer">
                                    
                                    <div className="cardPrecio">
                                        <div className="cardPrecio-header">
                                            <h4>Free</h4>
                                            <p className="precio">$<b>0</b>/month</p>
                                        </div>
                                        <div className="cardPrecio-body">
                                            <ul>
                                                <li className="active"><b>1</b> User Account</li>
                                                <li className="active"><b>10</b> Team Members</li>
                                                <li className="active"><b>Unlimited</b> Emails Accounts</li>
                                                <li className="active">Set And Manage Permissions</li>
                                                <li>API & extension support</li>
                                                <li>Developer support</li>
                                                <li>A/B Testing</li>
                                            </ul>
                                        </div>
                                        <div className="cardPrecio-footer">
                                            <a className="btns btns-3" href={'./'}>Sign up</a>
                                        </div>
                                    </div>

                                    <div className="cardPrecio">
                                        <div className="cardPrecio-header">
                                            <h4>Startup</h4>
                                            <p className="precio">$<b>29</b>/month</p>
                                        </div>
                                        <div className="cardPrecio-body">
                                            <ul>
                                                <li className="active"><b>10</b> User Account</li>
                                                <li className="active"><b>100</b> Team Members</li>
                                                <li className="active"><b>Unlimited</b> Emails Accounts</li>
                                                <li className="active">Set And Manage Permissions</li>
                                                <li className="active">API & extension support</li>
                                                <li>Developer support</li>
                                                <li>A/B Testing</li>
                                            </ul>
                                        </div>
                                        <div className="cardPrecio-footer">
                                            <a className="btns btns-3" href={'./'}>Sign up</a>
                                        </div>
                                    </div>

                                    <div className="cardPrecio active">
                                        <div className="cardPrecio-header">
                                            <h4>Pro</h4>
                                            <p className="precio">$<b>49</b>/month</p>
                                        </div>
                                        <div className="cardPrecio-body">
                                            <ul>
                                                <li className="active"><b>50</b> User Account</li>
                                                <li className="active"><b>500</b> Team Members</li>
                                                <li className="active"><b>Unlimited</b> Emails Accounts</li>
                                                <li className="active">Set And Manage Permissions</li>
                                                <li className="active">API & extension support</li>
                                                <li className="active">Developer support</li>
                                                <li>A/B Testing</li>
                                            </ul>
                                        </div>
                                        <div className="cardPrecio-footer">
                                            <a className="btns btns-4" href={'./'}>Sign up</a>
                                        </div>
                                    </div>

                                    <div className="cardPrecio">
                                        <div className="cardPrecio-header">
                                            <h4>Ultra</h4>
                                            <p className="precio">$<b>99</b>/month</p>
                                        </div>
                                        <div className="cardPrecio-body">
                                            <ul>
                                                <li className="active"><b>Unlimited</b> User Account</li>
                                                <li className="active"><b>Unlimited</b> Team Members</li>
                                                <li className="active"><b>Unlimited</b> Emails Accounts</li>
                                                <li className="active">Set And Manage Permissions</li>
                                                <li className="active">API & extension support</li>
                                                <li className="active">Developer support</li>
                                                <li className="active">A/B Testing</li>
                                            </ul>
                                        </div>
                                        <div className="cardPrecio-footer">
                                            <a className="btns btns-3" href={'./'}>Sign up</a>
                                        </div>
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

export default FlexiblePricing
