import ArticleTitle from 'components/ArticleTitle'
import ProjectThumb from 'components/ProjectThumb'

import * as Style from './styles'

const Projects = () => {
	return (
		<Style.Container>
			<ArticleTitle>Projetos</ArticleTitle>
			<Style.Gallery data-testid="gallery">
				<ProjectThumb projectUrl="https://google.com" />
			</Style.Gallery>
		</Style.Container>
	)
}

export default Projects
