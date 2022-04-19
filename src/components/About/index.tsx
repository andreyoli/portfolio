import ArticleTitle from 'components/ArticleTitle'
import * as Style from './styles'

const About = () => {
	return (
		<Style.Container>
			<ArticleTitle>Sobre mim</ArticleTitle>
			<Style.Paragraph data-testid="section-body">
				Desenvolvedor Frontend especializado em React e NextJs utilizando
				Typescript, mas com experiência em Git, Styled Components, React Testing
				Library, Jest e Axios. Gosto de trabalhar com ferramentas como Eslint,
				Prettier, Husky e Storybook para ter um código e projeto mais limpo e
				organizado. <br />
				<br />
				Além disso também possuo experiência profissional com automação de
				testes (QA), analisando e desenvolvendo cenários de testes, além de
				atuar com automação utilizando Selenium e cypress para testes de
				interface e Rest Assured para testes de API.
			</Style.Paragraph>
		</Style.Container>
	)
}

export default About
