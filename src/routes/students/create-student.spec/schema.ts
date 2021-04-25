import joi from 'joi'
import j2s from 'joi-to-swagger'

export const joiSchema = joi.object().keys({
	surname: joi.string().required().example('Ivanovich'),
	name: joi.string().required().example('Ivan'),
	patronymic: joi.string().required().example('Ivanov'),
	birthdate: joi.date().required().example('2021-04-24T00:00:00.000Z'),
	mark: joi.number().integer().valid(2, 3, 4, 5).allow(null)
})

const schema = j2s(joiSchema).swagger
export default schema
