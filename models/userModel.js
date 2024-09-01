const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: 'string',
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    selected: false,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  hisaab:
    [{ type: mongoose.Schema.Types.ObjectId, ref: "hisaab" }]
})
module.exports = mongoose.model('User', userSchema); 