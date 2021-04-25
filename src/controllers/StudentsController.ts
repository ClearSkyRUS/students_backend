import {Student, IStudent} from 'models/Student'

class StudentsController {
	get = () => Student.find({})
	create = async (data: IStudent) => {
		const student = Student.build(data)
		await student.save()
		return student
	}
	update = async (_id: string, data) =>
		Student.findOneAndUpdate({_id}, data, {upsert: true})
	delete = (_id: string) => Student.remove({_id})
}

export default StudentsController
