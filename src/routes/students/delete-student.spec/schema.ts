const joi = require('joi')
joi.objectId = require('joi-objectid')(joi)
import j2s from 'joi-to-swagger'

export const joiSchema = joi.object().keys({
	_id: joi.objectId().required().example('608404dc03c243043209619e')
})

const schema = j2s(joiSchema).swagger
export default schema
