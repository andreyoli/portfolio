module.exports = {
	images: {
		domains: [
			!process.env.AWS_REGION ? 'localhost' : 'www.andreyoliveira.com.br'
		]
	}
}
