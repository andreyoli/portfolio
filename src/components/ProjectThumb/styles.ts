import styled from 'styled-components'

export const LinkAsContainer = styled.a`
	height: 150px;
	width: 150px;

	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.5s;
	border-radius: 2px;

	img {
		border-radius: 2px;
	}

	svg {
		position: absolute;
		z-index: 2;
		opacity: 0;
		transition: 0.8s;
	}

	:hover {
		transform: scale(1.1);
	}

	:hover > :first-child {
		background-color: rgba(229, 122, 0, 0.7);
		backdrop-filter: blur(5px);
	}

	:hover > svg {
		opacity: 1;
	}
`

export const Blur = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 2px;
	position: absolute;
	transition: 0.8s;
	z-index: 1;
`
