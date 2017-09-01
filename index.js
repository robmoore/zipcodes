const { serveHttp, app } = require('webfunc')
const zipcodes = require("zipcodes")

/**
 * Responds to any HTTP request.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
exports.zipcodes = serveHttp([
	app.get('/', (req, res) => res.status(200).redirect('zipcodes/00501')),
	app.get('/{code}', (req, res, params) => res.status(200).json(zipcodes.lookup(params.code))),
	app.get('/{code}/neighbors', (req, res, params) => res.status(200).json(zipcodes.radius(params.code, req.query.radius || 50))),
])
