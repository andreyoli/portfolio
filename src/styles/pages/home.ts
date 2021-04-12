import styled from 'styled-components'

export const Wrapper = styled.main`
	padding-top: 100px;
	display: flex;
	flex-direction: row;

	@media (max-width: ${(props) => props.theme.breakpoints.mobileL}) {
		flex-direction: column;
	}
`

export const BodyContainer = styled.main`
	padding-left: ${(props) => props.theme.marginSize.medium};

	@media (max-width: ${(props) => props.theme.breakpoints.mobileL}) {
		padding: 0;
		padding-top: ${(props) => props.theme.marginSize.large};
		margin-bottom: ${(props) => props.theme.marginSize.medium};
	}
`
