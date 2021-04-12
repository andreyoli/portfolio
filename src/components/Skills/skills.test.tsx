import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Skills from '.'
import darkTheme from 'styles/themes/dark'

describe('<Skills />', () => {
	it('should render skills icons', () => {
		render(
			<ThemeProvider theme={darkTheme}>
				<Skills />
			</ThemeProvider>
		)

		const title = screen.getByTestId('title')
		const grid = screen.getByTestId('grid')

		expect(title).toBeInTheDocument()
		expect(grid).toBeInTheDocument()
	})
})
