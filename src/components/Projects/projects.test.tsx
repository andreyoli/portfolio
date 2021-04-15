import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Projects from '.'
import darkTheme from '../../styles/themes/dark'

describe('<Projects />', () => {
	it('should render title', () => {
		render(
			<ThemeProvider theme={darkTheme}>
				<Projects />
			</ThemeProvider>
		)

		const sectionTitle = screen.getByTestId('title')

		expect(sectionTitle).toBeInTheDocument()
	})

	it('should render gallery', () => {
		render(
			<ThemeProvider theme={darkTheme}>
				<Projects />
			</ThemeProvider>
		)

		const gallery = screen.getByTestId('gallery')

		expect(gallery).toBeInTheDocument()
	})
})
