const mongoose = require('mongoose');
const { type } = require('os');
const { title } = require('process');

const hisaabSchema = new mongoose.Schema({
  title:{
    type: 'string',
    required: true,
    unique: true,
    maxLength: 255,
    minLength: 3,
  },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  encrypted: {
    type: Boolean,
    required: true,
    default: false,
  },
  shareable: {
    type: Boolean,
    required: true,
    default: false,
  },
  passcode: {
    type: String,
    required: true,
    default: false,
  },
  editpermissions: {
  type: Boolean,
  default: false,
  }
},
  {timeseries: true}
);

const Hisaab = mongoose.model('hisaab', hisaabSchema);

module.exports = Hisaab;