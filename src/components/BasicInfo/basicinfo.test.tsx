import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import BasicInfo from '.'
import darkTheme from '../../styles/themes/dark'

describe('<BasicInfo />', () => {
	it('should render image', () => {
		render(
			<ThemeProvider theme={darkTheme}>
				<BasicInfo />
			</ThemeProvider>
		)

		expect(screen.getByAltText('Foto de perfil')).toBeInTheDocument()
	})

	it('should render the links with correct url', () => {
		render(
			<ThemeProvider theme={darkTheme}>
				<BasicInfo />
			</ThemeProvider>
		)

		const linkedin = screen.getByTestId('linkedin-link')
		const twitter = screen.getByTestId('twitter-link')
		const instagram = screen.getByTestId('instagram-link')
		const github = screen.getByTestId('github-link')

		expect(linkedin).toHaveAttribute(
			'href',
			'https://www.linkedin.com/in/andreyoli/'
		)
		expect(twitter).toHaveAttribute('href', 'https://twitter.com/dreysub')
		expect(instagram).toHaveAttribute(
			'href',
			'https://www.instagram.com/dreysub/'
		)
		expect(github).toHaveAttribute('href', 'https://github.com/andreyoli')
	})

	it('should render correct information in contact', () => {
		render(
			<ThemeProvider theme={darkTheme}>
				<BasicInfo />
			</ThemeProvider>
		)

		const location = screen.getByText('São Paulo - Brasil')
		const email = screen.getByText('andrey.o.paula@gmail.com')
		const phone = screen.getByText('+55 (13) 996110-1665')

		expect(location).toBeInTheDocument()
		expect(email).toBeInTheDocument()
		expect(phone).toBeInTheDocument()
	})
})
