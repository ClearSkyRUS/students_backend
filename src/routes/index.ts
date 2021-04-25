import swaggerUI from 'swagger-ui-express'
import swDocument from 'openapi'
import express from 'express'
const router = express.Router()

import Students from './students/index'

router.use('/students', Students)

router.use(
	'/docs',
	swaggerUI.serve,
	swaggerUI.setup(swDocument, {explorer: true})
)

export default router
