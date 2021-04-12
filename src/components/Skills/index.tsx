import {
	Typescript,
	ReactLogo,
	NextDotJs,
	StyledComponents,
	Jest,
	Testinglibrary,
	Graphql,
	NodeDotJs,
	Express,
	Postgresql,
	Mongodb,
	Git,
	Linux
} from '@styled-icons/simple-icons'
import ArticleTitle from 'components/ArticleTitle'

import * as Style from './styles'

const Skills = () => {
	return (
		<Style.Container>
			<ArticleTitle>Habilidades</ArticleTitle>

			<Style.IconContainer data-testid="grid">
				<Style.IconWrapper>
					<Typescript size={50} />
					<p>TypeScript</p>
				</Style.IconWrapper>
				<Style.IconWrapper>
					<ReactLogo size={50} />
					<p>ReactJS</p>
				</Style.IconWrapper>
				<Style.IconWrapper>
					<NextDotJs size={50} />
					<p>Next.Js</p>
				</Style.IconWrapper>
				<Style.IconWrapper>
					<StyledComponents size={50} />
					<p>Styled Components</p>
				</Style.IconWrapper>
				<Style.IconWrapper>
					<Jest size={50} />
					<p>Jest</p>
				</Style.IconWrapper>
				<Style.IconWrapper>
					<Testinglibrary size={50} />
					<p>Testing Library</p>
				</Style.IconWrapper>
				<Style.IconWrapper>
					<Graphql size={50} />
					<p>GraphQL</p>
				</Style.IconWrapper>
				<Style.IconWrapper>
					<NodeDotJs size={50} />
					<p>Node.Js</p>
				</Style.IconWrapper>
				<Style.IconWrapper>
					<Express size={50} />
					<p>Express</p>
				</Style.IconWrapper>
				<Style.IconWrapper>
					<Postgresql size={50} />
					<p>PostgreSQL</p>
				</Style.IconWrapper>
				<Style.IconWrapper>
					<Mongodb size={50} />
					<p>MongoDB</p>
				</Style.IconWrapper>
				<Style.IconWrapper>
					<Git size={50} />
					<p>Git</p>
				</Style.IconWrapper>
				<Style.IconWrapper>
					<Linux size={50} />
					<p>Linux</p>
				</Style.IconWrapper>
			</Style.IconContainer>
		</Style.Container>
	)
}

export default Skills
