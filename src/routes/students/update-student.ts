import {Request, Response} from 'express'

import StudentsController from 'controllers/StudentsController'
import schema, {joiSchema} from './update-student.spec/schema'
import validate from 'validation'

export default async (req: Request, res: Response) => {
	const data = validate(joiSchema, req, res)
	if (!data) return
	const {_id, ...update} = data
	await new StudentsController().update(_id, update)
	res.json()
}

export const swupdateStudent = {
	summary: 'Update student',
	tags: ['Students'],
	requestBody: {
		content: {
			'application/json': {
				schema: {
					...schema
				}
			}
		}
	},
	responses: {
		'200': {
			description: 'Done'
		},
		'403': {
			description: 'Validation error',
			content: {
				'application/json': {
					schema: {
						type: 'object',
						properties: {
							message: {
								type: 'string',
								example: '"birthdate" must be a valid date'
							},
							context: {
								type: 'object',
								properties: {
									label: {type: 'string', example: 'birthdate'},
									key: {type: 'string', example: 'birthdate'}
								}
							}
						}
					}
				}
			}
		}
	}
}
