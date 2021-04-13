import Image from 'next/image'

import {
	Linkedin,
	Twitter,
	Instagram,
	Github,
	Googlemaps
} from '@styled-icons/simple-icons'
import { PhoneAndroid, Email } from '@styled-icons/material'
import * as Style from './styles'

const BasicInfo = () => {
	return (
		<Style.Container>
			<Style.ProfileWrapper>
				<Image
					src="/perfil.png"
					alt="Foto de perfil"
					width={180}
					height={180}
				/>
				<h2>Andrey Oliveira</h2>
				<p>Front-end Developer</p>
				<Style.SocialMediaWrapper>
					<a
						aria-label="linkedin"
						href="https://www.linkedin.com/in/andreyoli/"
						target="_blank"
						rel="noreferrer"
						data-testid="linkedin-link"
					>
						<Linkedin size={25} />
					</a>
					<a
						aria-label="twitter"
						href="https://twitter.com/dreysub"
						target="_blank"
						rel="noreferrer"
						data-testid="twitter-link"
					>
						<Twitter size={25} />
					</a>
					<a
						aria-label="instagram"
						href="https://www.instagram.com/dreysub/"
						target="_blank"
						rel="noreferrer"
						data-testid="instagram-link"
					>
						<Instagram size={25} />
					</a>
					<a
						aria-label="github"
						href="https://github.com/andreyoli"
						target="_blank"
						rel="noreferrer"
						data-testid="github-link"
					>
						<Github size={25} />
					</a>
				</Style.SocialMediaWrapper>
			</Style.ProfileWrapper>

			<Style.ContactWrapper>
				<Style.ContactIconWrapper>
					<Googlemaps size={25} /> São Paulo - Brasil
				</Style.ContactIconWrapper>
				<Style.ContactIconWrapper>
					<PhoneAndroid size={25} /> +55 (13) 996110-1665
				</Style.ContactIconWrapper>
				<Style.ContactIconWrapper>
					<Email size={25} /> andrey.o.paula@gmail.com
				</Style.ContactIconWrapper>
			</Style.ContactWrapper>
		</Style.Container>
	)
}

export default BasicInfo
