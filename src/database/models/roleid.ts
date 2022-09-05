import { Schema, model, Model, Document } from 'mongoose';

const schema = new Schema({
  verifyRoleID: {
    type: String,
    required: true
  },
  guildID: {
    type: String,
    required: true
  }
}, {versionKey: false});

const verifyRoleModel = model('verifyRole', schema, 'verifyRole');

export default verifyRoleModel;