import mongoose from 'mongoose'

interface IStudent {
	surname: string
	name: string
	patronymic: string
	birthdate: Date
	mark?: number
}

interface studentModelInterface extends mongoose.Model<any> {
	build(attr: IStudent): any
}

const studentSchema = new mongoose.Schema(
	{
		surname: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		patronymic: {
			type: String,
			required: true
		},
		birthdate: {
			type: Date,
			required: true
		},
		mark: {
			type: Number,
			enum: [2, 3, 4, 5],
			default: null
		}
	},
	{
		timestamps: false,
		versionKey: false
	}
)

studentSchema.statics.build = (attr: IStudent) => new Student(attr)

const Student = mongoose.model<any, studentModelInterface>(
	'Student',
	studentSchema
)

export {Student, IStudent}
