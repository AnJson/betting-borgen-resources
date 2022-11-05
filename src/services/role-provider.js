/**
 * Module to authorize and verify roles.
 */

 import createError from 'http-errors'

/**
 * Verify and set role.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const isAdmin = async (req, res, next) => {
  try {
    const data = await fetch(`auth-service`, {
      method: 'GET',
      headers: {
        Authorization: req.headers.authorization,
        'Content-Type': 'application/json'
      }
    })

    const json = await data.json()
    // req.user.role = // Set user to req-object, containing information about role.

    next()

  } catch (e) {
    const err = createError(400)
    err.message = e.message
    next(err)
  }
}