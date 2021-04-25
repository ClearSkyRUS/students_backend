import config from 'config'
import {swStudentsRoute} from 'routes/students/index'

const swagger = {
	openapi: '3.0.0',
	info: {
		title: `API for ${config.projectName}`,
		version: '1.0.0',
		description: `The REST API for ${config.projectName}`
	},
	servers: [
		{
			url: config.url,
			description: `${config.projectName} server`
		}
	],
	paths: {
		...swStudentsRoute
	}
}

export default swagger
