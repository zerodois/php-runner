const { to } = require('../utils')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

exports.execute = async (raw) => {
	const code = raw
		.replace('<?php', '')
		.replace('?>', '')
	const  [err, data] = await to(exec(`php -r '${code}'`));
	const { stdout, stderr } = data || err
	if (stderr) {
		throw new Error(err.stderr)
	}
	return stdout
}