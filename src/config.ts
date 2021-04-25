const mongoConnection = {
	options: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
		connectTimeoutMS: 10000,
		...(process.env.MONGO_USERNAME && process.env.MONGO_PASSWORD
			? {
					auth: {
						authSource: 'admin',
						user: process.env.MONGO_USERNAME,
						password: process.env.MONGO_PASSWORD
					}
			  }
			: {})
	},
	mongoDatabse: process.env.MONGO_DB || 'default',
	mongoHost: process.env.MONGO_HOSTNAME || '127.0.0.1',
	mongoPort: process.env.MONGO_PORT || '27017'
}

const runParms = {
	port: process.env.BACKEND_PORT || 8080
}

const config = {
	mongoConnection: `mongodb://${mongoConnection.mongoHost}:${mongoConnection.mongoPort}/${mongoConnection.mongoDatabse}`,
	mongoConnectionOptions: mongoConnection.options,
	url: process.env.BACKEND_PATH || `http://localhost:${runParms.port}`,
	projectName: process.env.PROJECT_NAME || 'Students',
	...runParms
}

export default config
