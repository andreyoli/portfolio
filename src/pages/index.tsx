import * as Style from 'styles/pages/home'

import BasicInfo from 'components/BasicInfo'
import About from 'components/About'

export default function Home() {
	return (
		<Style.Wrapper>
			<BasicInfo />
			<Style.BodyContainer>
				<About />
			</Style.BodyContainer>
		</Style.Wrapper>
	)
}
