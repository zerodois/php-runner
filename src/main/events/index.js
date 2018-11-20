const { execute } = require('../compiler')

module.exports = {
	'code:execute': async (code) => {
		const resp = await execute(code)
		return resp
	}
}