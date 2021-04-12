import * as Style from './styles'

type SectionTitleProps = {
	children: React.ReactNode
}

const SectionTitle = ({ children }: SectionTitleProps) => {
	return <Style.Title data-testid="title"> {children} </Style.Title>
}

export default SectionTitle
