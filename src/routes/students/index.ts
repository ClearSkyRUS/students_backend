import express from 'express'
const router = express.Router()

import getStudents, {swGetStudents} from './get-students'
import createStudent, {swcreateStudent} from './create-student'
import updateStudent, {swupdateStudent} from './update-student'
import deleteStudent, {swdeleteStudent} from './delete-student'

router.get('/', getStudents)
router.post('/', createStudent)
router.patch('/', updateStudent)
router.delete('/', deleteStudent)

export default router

export const swStudentsRoute = {
	'/students': {
		get: {
			...swGetStudents
		},
		post: {
			...swcreateStudent
		},
		patch: {
			...swupdateStudent
		},
		delete: {
			...swdeleteStudent
		}
	}
}
