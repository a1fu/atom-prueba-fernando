import React from 'react'

function EasyToUse() {
  	return (
    	<React.Fragment>
			<section className="easyToUse">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-8">
							<div className="easyToUse-titulo">
								<h2 className="titulo">Easy to use API</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam ex tempora odio saepe magnam sint deleniti sequi laudantium id?</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="easyToUse-options">
								<div className="easyToUse-options-btn">
									<button className="btn-1 active" type="button" href="#">Initializing JS</button>
									<button className="btn-1" type="button" href="#">Configuration JS</button>
									<button className="btn-1" type="button" href="#">Security leveles API</button>
								</div>
							</div>

							<div className="easyToUse-options-bx">
								<div className="easyToUse-options-bx-body">
									<div className="easyToUse-options-bx-header">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, reiciendis.
									</div>
									<div className="easyToUse-options-bx-footer">
										<a className="btns btns-1" href={'./'}>get the code</a>
										<a className="btns btns-2" href={'./'}>run example</a>
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

export default EasyToUse
