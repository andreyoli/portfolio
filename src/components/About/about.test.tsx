import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import About from '.'
import darkTheme from '../../styles/themes/dark'

describe('<About />', () => {
	it('should render title and paragraph', () => {
		render(
			<ThemeProvider theme={darkTheme}>
				<About />
			</ThemeProvider>
		)

		const sectionTitle = screen.getByTestId('title')
		const sectionBody = screen.getByTestId('section-body')

		expect(sectionTitle).toBeInTheDocument()
		expect(sectionBody).toBeInTheDocument()
	})
})
