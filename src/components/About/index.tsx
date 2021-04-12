import ArticleTitle from 'components/ArticleTitle'
import * as Style from './styles'

const About = () => {
	return (
		<Style.Container>
			<ArticleTitle>Sobre mim</ArticleTitle>
			<Style.Paragraph data-testid="section-body">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				scelerisque bibendum euismod. Fusce eget malesuada arcu. Vivamus
				ullamcorper mauris id sapien porta, ac dictum turpis sodales. Integer
				dapibus auctor turpis id faucibus. Duis nec neque tempus, scelerisque mi
				vel, scelerisque neque. Proin in rutrum ligula. Morbi ante nisi,
				elementum sit amet lectus id, mattis semper tortor
			</Style.Paragraph>
		</Style.Container>
	)
}

export default About
