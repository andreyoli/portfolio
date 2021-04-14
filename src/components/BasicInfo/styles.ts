import styled from 'styled-components'

export const Container = styled.header`
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: 0;
	max-width: 278px;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: flex-start;
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

export const ImageWrapper = styled.div`
	width: 180px;
	height: 180px;
	position: relative;
	animation: shimmer 4s infinite linear;
	background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
	background-size: 500px 100%;
	border-radius: 50%;

	img {
		border-radius: 50%;
	}

	@keyframes shimmer {
		0% {
			background-position: -1000px 0;
		}
		100% {
			background-position: 1000px 0;
		}
	}
`

export const ProfileWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	flex-direction: column;

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
