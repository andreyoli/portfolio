import styled from 'styled-components'

export const Container = styled.article`
	margin-right: -34px;

	@media (max-width: ${(props) => props.theme.breakpoints.mobileL}) {
		margin-right: 0;
	}
`

export const Gallery = styled.div`
	display: flex;
	flex-wrap: wrap;

	a {
		margin: 0 34px 34px 0;
	}

	@media (max-width: ${(props) => props.theme.breakpoints.mobileL}) {
		justify-content: space-around;
		align-items: center;

		a {
			margin: 0 0 34px 0;
		}
	}
`
