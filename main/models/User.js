const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must be an email address'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
);

userSchema
  .virtual('freindCount')
  .get(function () {
    return this.friends.length;
  });

const User = model('User', userSchema);  

module.exports = User;