/**
 * The routes.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

import express from 'express'
import createError from 'http-errors'
import { router as competitionRouter } from './competition-router.js'
import { documentation } from '../documentation/documentation.js'

export const router = express.Router()

router.get('/', (req, res) => res.json(documentation))
router.use('/competitions', competitionRouter)

// Catch 404 (ALWAYS keep this as the last route).
router.use('*', (req, res, next) => next(createError(404)))
