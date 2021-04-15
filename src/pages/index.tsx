import * as Style from 'styles/pages/home'

import BasicInfo from 'components/BasicInfo'
import About from 'components/About'
import Skills from 'components/Skills'
import Projects from 'components/Projects'

export default function Home() {
	return (
		<Style.Wrapper>
			<BasicInfo />
			<Style.BodyContainer>
				<About />
				<Skills />
				<Projects />
			</Style.BodyContainer>
		</Style.Wrapper>
	)
}
