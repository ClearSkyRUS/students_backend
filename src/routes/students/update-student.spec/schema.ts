const joi = require('joi')
joi.objectId = require('joi-objectid')(joi)
import j2s from 'joi-to-swagger'

export const joiSchema = joi
	.object()
	.keys({
		_id: joi.objectId().required().example('608404dc03c243043209619e'),
		surname: joi.string().example('Ivan'),
		name: joi.string().example('Ivanovich'),
		patronymic: joi.string().example('Ivanov'),
		birthdate: joi.date().example('2021-04-24T00:00:00.000Z'),
		mark: joi.number().integer().valid(2, 3, 4, 5).allow(null)
	})
	.min(2)

const schema = j2s(joiSchema).swagger
export default schema
