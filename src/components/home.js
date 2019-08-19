import React from 'react'

//components
import Header from './header'
import FeaturesDesigned from './featuresDesigned'
import EasyToUse from './easyToUse'
import FlexiblePreicing from './flexiblePricing'
import TrustedByWorld from './trustedByWorld'
import FrequentlyAsked from './frequentlyAsked'
import Footer from './footer'

function Home() {
  	return (
		<React.Fragment>
			<Header />
			<FeaturesDesigned />
			<EasyToUse />
			<FlexiblePreicing />
			<TrustedByWorld />
			<FrequentlyAsked />
			<Footer />
		</React.Fragment>
  	)
}

export default Home
