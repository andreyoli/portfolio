import * as Style from 'styles/pages/home'

import BasicInfo from 'components/BasicInfo'
import About from 'components/About'
import Skills from 'components/Skills'

export default function Home() {
	return (
		<Style.Wrapper>
			<BasicInfo />
			<Style.BodyContainer>
				<About />
				<Skills />
			</Style.BodyContainer>
		</Style.Wrapper>
	)
}
