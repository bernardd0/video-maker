const readline = require('readline-sync')
const robots = {
	text: require('./robots/text.js')
}

async function start() {
	const content = {
		maximumSentences: 7
	}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

	await robots.text(content)

	function askAndReturnSearchTerm() {
		return readline.question('Type a Wikipedia search term: ')
	}

	function askAndReturnPrefix(searchTerm) {
		const prefixes = ['Who is', 'What is', 'The history of']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose an option for ${searchTerm}: ')
		const selectedPrefixText = prefixes[selectedPrefixIndex]

		return selectedPrefixText
	}

	console.log(content)
}

start()
