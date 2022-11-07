import express from 'express'
import { CompetitionController } from '../controllers/competition-controller.js'
// import { rateLimiter } from '../config/rate-limit.js' // NOTE: Adds rate-limit.

export const router = express.Router()

const controller = new CompetitionController()

// NOTE: adds rate-limit and auth.
/*
// Block user from all routes if not valid JWT.
// Implement rate-limit on all routes on this router.
router.all('*', controller.authenticateJWT, rateLimiter)

// Authorize user for single resource.
router.param('id', controller.authorize)
 */

router.get('/', (req, res, next) => controller.index(req, res, next))
router.post('/', (req, res, next) => controller.indexPost(req, res, next))
router.get('/:id', (req, res, next) => controller.competition(req, res, next))
router.put('/:id', (req, res, next) => controller.competitionPut(req, res, next))
router.patch('/:id', (req, res, next) => controller.competitionPatch(req, res, next))
router.delete('/:id', (req, res, next) => controller.competitionDelete(req, res, next))
