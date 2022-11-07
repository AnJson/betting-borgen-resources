import express from 'express'
import { CompetitionController } from '../controllers/competition-controller.js'
import { rateLimiter } from '../config/rate-limit.js'
import { authenticateJWT } from '../services/auth-provider.js'

export const router = express.Router()

const controller = new CompetitionController()
// Block user from all routes if not valid JWT.
// Implement rate-limit on all routes on this router.
router.all('*', authenticateJWT, rateLimiter)

router.get('/', (req, res, next) => controller.index(req, res, next))
router.post('/', (req, res, next) => controller.indexPost(req, res, next))
router.get('/:id', (req, res, next) => controller.group(req, res, next))
router.put('/:id', (req, res, next) => controller.groupPut(req, res, next))
router.patch('/:id', (req, res, next) => controller.groupPatch(req, res, next))
router.delete('/:id', (req, res, next) => controller.groupDelete(req, res, next))
