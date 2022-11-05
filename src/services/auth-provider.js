/**
 * Module for authenticate jwt.
 */

import createError from 'http-errors'
import jwt from 'jsonwebtoken'

/**
 * Middleware to authenticate jwt and set payload properties to request body.
 * Properties added to payload: { sub, username }
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const authenticateJWT = async (req, res, next) => {
  try {
    const accessToken = Buffer.from(process.env.ACCESS_TOKEN, 'base64') // Public key of jwt access token
    const [authenticationScheme, token] = req.headers.authorization?.split(' ')

    if (authenticationScheme !== 'Bearer') {
      throw new Error('Invalid authentication scheme.')
    }

    // Verify token.
    const payload = jwt.verify(token, accessToken)

    // Bad practice to set role in jwt.
    req.user = {
      sub: payload.sub,
      username: payload.username
    }

    next()
  } catch (error) {
    const err = createError(401)
    err.message = error.message
    next(err)
  }
}
