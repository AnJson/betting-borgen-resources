import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  members: {
    type: [String]
  },
  description: {
    type: String,
    maxLength: [500, 'The description must be of maximum length 500 characters.'],
    trim: true
  },
  title: {
    type: String,
    minLength: [3, 'The title must be of minimum length 3 characters.'],
    maxLength: [100, 'The title must be of maximum length 100 characters.'],
    trim: true,
    required: true
  },
  adminId: {
    type: String,
    trim: true,
    immutable: true
  }
}, {
  timestamps: true,
  toJSON: {
    /**
     * Performs a transformation of the resulting object to remove sensitive information.
     *
     * @param {object} doc - The mongoose document which is being converted.
     * @param {object} ret - The plain object representation which has been converted.
     */
    transform: function (doc, ret) {
      delete ret._id
      delete ret.__v
    },
    virtuals: true // ensure virtual fields are serialized
  }
})

schema.virtual('id').get(function () {
  return this._id.toHexString()
})

// Create a model using the schema.
export const Groups = mongoose.model('Groups', schema)
