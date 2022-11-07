import createError from 'http-errors'
import { Competitions } from '../models/competitions.js'

export class CompetitionController {
  // (GET /competitions).
  async index (req, res, next) {
    try {
      const { fields, sort, skip, limit, page, ...filter } = req.query

      // Set up query with filters, sorting and pagination.
      const query = Competitions
        .find(filter)
        .select(fields ? fields.split(',').join(' ') : undefined)
        .sort(sort ? sort.split(',').join(' ') : '-createdAt')
        .skip(skip)
        .limit(limit)

      // Execute the query.
      const competitions = await query

      res
        .status(200)
        .json(competitions)
    } catch (error) {
      next(error)
    }
  }

  // (POST /competitions).
  async indexPost (req, res, next) {
    try {
      // TODO: implement.
    } catch (error) {
      let err = error

      // Validation error(s).
      if (err.name === 'ValidationError') {
        err = createError(400)
        err.cause = error
      }

      next(err)
    }
  }

  // (GET /competitions/:id).
  async competition (req, res, next) {
    try {
      // TODO: Implement.
    } catch (error) {
      next(error)
    }
  }

  // (PUT /competitions/:id).
  async competitionPut (req, res, next) {
    try {
      /* const competition = {
        title: req.body.title,
        startDate: req.body.startDate,
        endDate: req.body.endDate
      } */

      // TODO: Implement finding resource and updating.

      res
        .status(204)
        .end()
    } catch (error) {
      let err = error

      // Validation error(s).
      if (err.name === 'ValidationError') {
        err = createError(400)
        err.cause = error
      }

      next(err)
    }
  }

  // (PATCH /competitions/:id).
  async competitionPatch (req, res, next) {
    try {
      // TODO: Implement finding and updating resource.

      res
        .status(204)
        .end()
    } catch (error) {
      let err = error

      // Validation error(s).
      if (err.name === 'ValidationError') {
        err = createError(400)
        err.cause = error
      }

      next(err)
    }
  }

  // (DELETE /competitions/:id).
  async competitionDelete (req, res, next) {
    try {
      // TODO: Implement finding and deleting resource.
      res
        .status(204)
        .end()
    } catch (error) {
      next(error)
    }
  }
}
