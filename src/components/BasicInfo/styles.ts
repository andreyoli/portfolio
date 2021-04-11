import styled from 'styled-components'

export const Container = styled.header`
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: 0;
	max-width: 278px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	svg {
		fill: ${(props) => props.theme.colors.primary};
		transition: 0.3s;
	}

	@media (max-width: ${(props) => props.theme.breakpoints.mobileL}) {
		max-width: 100%;
		position: static;
	}
`

export const ProfileWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	flex-direction: column;

	img {
		border-radius: 50%;
	}

	h2 {
		margin-top: 15px;
	}

	svg:hover {
		fill: ${(props) => props.theme.colors.secondary};
		cursor: pointer;
		transform: scale(1.5);
	}
`

export const SocialMediaWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 150px;
	margin-top: 10px;
`

export const ContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: ${(props) => props.theme.marginSize.large};

	svg {
		margin: 0 8px 0 0;
	}
`

export const ContactIconWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 8px;
	transition: 0.3s;
	text-align: center;
`
