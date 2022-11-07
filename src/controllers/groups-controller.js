import createError from 'http-errors'
import { Groups } from '../models/groups.js'

export class GroupsController {
  // (GET /groups).
  async index (req, res, next) {
    try {
      const { fields, sort, skip, limit } = req.query

      const queryCopy = { ...req.query }
      const excludedFields = ['fields', 'sort', 'skip', 'limit', 'page']
      excludedFields.forEach(field => delete queryCopy[field])

      let filterString = JSON.stringify(queryCopy)
      filterString = filterString.replace(/\b(all|in)\b/g, match => `$${match}`)
      const filter = JSON.parse(filterString)
      // Set up query with filters, sorting and pagination.
      const query = Groups
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

  // (POST /groups).
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

  // (GET /groups/:id).
  async group (req, res, next) {
    try {
      // TODO: Implement.
    } catch (error) {
      next(error)
    }
  }

  // (PUT /groups/:id).
  async groupPut (req, res, next) {
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

  // (PATCH /groups/:id).
  async groupPatch (req, res, next) {
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

  // (DELETE /groups/:id).
  async groupDelete (req, res, next) {
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
