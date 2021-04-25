import {Request, Response} from 'express'

import StudentsController from 'controllers/StudentsController'
import schema from './update-student.spec/schema'

export default async (req: Request, res: Response) => {
	const students = await new StudentsController().get()
	res.json(students)
}

export const swGetStudents = {
	summary: 'Get students',
	tags: ['Students'],
	responses: {
		'200': {
			description: 'Students array',
			content: {
				'application/json': {
					schema: {
						type: 'array',
						items: schema
					}
				}
			}
		}
	}
}
