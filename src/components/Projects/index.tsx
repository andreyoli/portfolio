import ArticleTitle from 'components/ArticleTitle'
import ProjectThumb from 'components/ProjectThumb'

import * as Style from './styles'

const Projects = () => {
	return (
		<Style.Container>
			<ArticleTitle>Projetos</ArticleTitle>
			<Style.Gallery data-testid="gallery">
				<ProjectThumb projectUrl="https://uanimelist.andreyoliveira.com.br" />
				<ProjectThumb projectUrl="https://mytrips.andreyoliveira.com.br" />
				<ProjectThumb projectUrl="https://moveit.andreyoliveira.com.br" />
			</Style.Gallery>
		</Style.Container>
	)
}

export default Projects
