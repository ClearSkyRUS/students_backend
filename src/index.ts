import mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import config from 'config'
import Routes from 'routes'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use('/', Routes)

mongoose.connect(
	config.mongoConnection,
	config.mongoConnectionOptions,
	(err?: Error) => {
		if (err) return console.log(err)
		app.listen(config.port, () => {
			console.log(`server is listening on ${config.port}`)
		})
	}
)
