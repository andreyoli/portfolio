import styled from 'styled-components'

export const Container = styled.article``

export const IconContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
	grid-gap: 2rem;

	@media (max-width: ${(props) => props.theme.breakpoints.mobileL}) {
		grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
	}
`

export const IconWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: 0;

	p {
		text-align: center;
	}
`
