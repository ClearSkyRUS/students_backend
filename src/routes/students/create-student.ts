import {Request, Response} from 'express'

import StudentsController from 'controllers/StudentsController'
import schema, {joiSchema} from './create-student.spec/schema'
import validate from 'validation'

export default async (req: Request, res: Response) => {
	const data = validate(joiSchema, req, res)
	if (!data) return
	const student = await new StudentsController().create(data)
	res.json(student._id)
}

export const swcreateStudent = {
	summary: 'Create student',
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
			description: 'Done',
			content: {
				'application/json': {
					schema: {
						type: 'objectId',
						example: '608404dc03c243043209619e'
					}
				}
			}
		},
		'403': {
			description: 'Validation error',
			content: {
				'application/json': {
					schema: {
						type: 'object',
						properties: {
							message: {type: 'string', example: '"birthdate" is required'},
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
