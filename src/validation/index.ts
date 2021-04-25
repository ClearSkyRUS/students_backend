import {Request, Response} from 'express'

export default (joiSchema, req: Request, res: Response) => {
	const {value, error} = joiSchema.validate(req.body)

	if (!error) return value

	res.status(400).json({
		message: error.details[0].message,
		context: error.details[0].context
	})
}
