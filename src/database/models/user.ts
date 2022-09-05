import { Schema, model, Model, Document } from 'mongoose';

const schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
}, {versionKey: false});

const userModel = model('user', schema, 'user');

export default userModel;