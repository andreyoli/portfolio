import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import ProjectThumb from '.'
import darkTheme from 'styles/themes/dark'

describe('<ProjectThumb />', () => {
	it('should render project image', () => {
		render(
			<ThemeProvider theme={darkTheme}>
				<ProjectThumb projectUrl={'http://google.com'} />
			</ThemeProvider>
		)

		expect(screen.getByAltText('Imagem do projeto')).toBeInTheDocument()
	})

	it('should have a href attribute', () => {
		render(
			<ThemeProvider theme={darkTheme}>
				<ProjectThumb projectUrl={'http://google.com'} />
			</ThemeProvider>
		)

		expect(screen.getByLabelText('Link do Projeto')).toHaveAttribute('href')
	})
})
