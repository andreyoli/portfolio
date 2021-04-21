import chrome from 'chrome-aws-lambda'

type ChromeExecPaths = {
	win32: string
	linux: string
	darwin: string
	[key: string]: string
}

const chromeExecPaths: ChromeExecPaths = {
	win32: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
	linux: '/usr/bin/google-chrome',
	darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
}

const exePath = chromeExecPaths[process.platform]

interface Options {
	args: string[]
	executablePath: string
	headless: boolean
	ignoreHTTPSErrors: boolean
}

export async function getOptions(isDev: boolean): Promise<Options> {
	let options: Options

	if (isDev) {
		options = {
			args: [],
			executablePath: exePath,
			headless: true,
			ignoreHTTPSErrors: true
		}
	} else {
		options = {
			args: chrome.args,
			executablePath: await chrome.executablePath,
			headless: chrome.headless,
			ignoreHTTPSErrors: true
		}
	}

	return options
}
