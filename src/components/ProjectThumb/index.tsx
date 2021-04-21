import Image from 'next/image'
import { ExternalLink } from '@styled-icons/feather'

import * as Style from './styles'

type ProjectThumbProps = {
	projectUrl: string
}

const ProjectThumb = ({ projectUrl }: ProjectThumbProps) => {
	return (
		<Style.LinkAsContainer
			href={projectUrl}
			target="_blank"
			aria-label="Link do Projeto"
		>
			<Style.Blur></Style.Blur>
			<ExternalLink size={35} />
			<Image
				src={`https://www.andreyoliveira.com.br/api/thumbnail?url=${projectUrl}`}
				alt="Imagem do projeto"
				width={150}
				height={150}
				objectFit="cover"
			/>
		</Style.LinkAsContainer>
	)
}

export default ProjectThumb
