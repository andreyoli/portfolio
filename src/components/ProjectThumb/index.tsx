import Image from 'next/image'
import { Add } from '@styled-icons/material'

import * as Style from './styles'

type ProjectThumbProps = {
	projectUrl: string
	projectSrc?: string
}

const ProjectThumb = ({ projectUrl, projectSrc }: ProjectThumbProps) => {
	return (
		<Style.LinkAsContainer href={projectUrl} aria-label="Link do Projeto">
			<Style.Blur></Style.Blur>
			<Add size={35} />
			<Image
				src={projectSrc || '/placeholder.png'}
				alt="Imagem do projeto"
				width={150}
				height={150}
				objectFit="cover"
			/>
		</Style.LinkAsContainer>
	)
}

export default ProjectThumb
