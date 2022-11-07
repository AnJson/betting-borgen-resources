import express from 'express'
import createError from 'http-errors'
import { router as competitionsRouter } from './competition-router.js'
import { router as groupsRouter } from './group-router.js'
import { documentation } from '../documentation/documentation.js'

export const router = express.Router()

router.get('/', (req, res) => res.json(documentation))
router.use('/competitions', competitionsRouter)
router.use('/groups', groupsRouter)

// Catch 404 (ALWAYS keep this as the last route).
router.use('*', (req, res, next) => next(createError(404)))
