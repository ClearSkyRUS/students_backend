import {Request, Response} from 'express'

import StudentsController from 'controllers/StudentsController'
import schema, {joiSchema} from './delete-student.spec/schema'
import validate from 'validation'

export default async (req: Request, res: Response) => {
	const data = validate(joiSchema, req, res)
	if (!data) return
	await new StudentsController().delete(data._id)
	res.json()
}

export const swdeleteStudent = {
	summary: 'Delete student',
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
								example: '"_id" must be a valid GUID'
							},
							context: {
								type: 'object',
								properties: {
									label: {type: 'string', example: '_id'},
									key: {type: 'string', example: '_id'}
								}
							}
						}
					}
				}
			}
		}
	}
}
