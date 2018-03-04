const input = document.getElementById('foo')

const lessButton = () => {
	let value = Number(input.value)
	console.log(typeof value)
	if ( value > 1 ) {
		value = value - 1
	}
}

const moreButton = () => {
	input.value = Number(input.value) + 1
}
