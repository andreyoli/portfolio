import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import ArticleTitle from '.'
import darkTheme from 'styles/themes/dark'

describe('<ArticleTitle />', () => {
	it('should render title', () => {
		render(
			<ThemeProvider theme={darkTheme}>
				<ArticleTitle>Some Title</ArticleTitle>
			</ThemeProvider>
		)

		const title = screen.getByTestId('title')

		expect(title).toHaveStyle('margin-bottom: 30px')
	})
})
