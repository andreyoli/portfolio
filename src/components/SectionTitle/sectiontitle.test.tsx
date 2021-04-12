import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import SectionTitle from '.'
import darkTheme from 'styles/themes/dark'

describe('<SectionTitle />', () => {
	it('should render title', () => {
		render(
			<ThemeProvider theme={darkTheme}>
				<SectionTitle>Some Title</SectionTitle>
			</ThemeProvider>
		)

		const title = screen.getByTestId('title')

		expect(title).toHaveStyle('margin-bottom: 30px')
	})
})
