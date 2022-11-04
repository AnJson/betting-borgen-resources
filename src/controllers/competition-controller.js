/**
 * The Competition Controller.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

import createError from 'http-errors'
import { Resource } from '../models/resource.js'

/**
 * Encapsulates a controller.
 */
export class CompetitionController {
  /**
   * Json-response with an array of competitions.
   * (GET /competitions).
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async index (req, res, next) {
    try {
      const { fields, sort, skip, limit, page, ...filter } = req.query

      // Set up query with filters, sorting and pagination.
      const query = Resource
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

  /**
   * Save new competition.
   * (POST /competitions).
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
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

  /**
   * Return single competition as json.
   * (GET /competitions/:id).
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async competition (req, res, next) {
    try {
      // TODO: Implement.
    } catch (error) {
      next(error)
    }
  }

  /**
   * Return single competition as json.
   * (GET /competitions/:id).
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
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

  /**
   * Return single competition as json.
   * (GET /competitions/:id).
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
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

  /**
   * Return single competition as json.
   * (GET /competitions/:id).
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
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
