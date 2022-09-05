import { Schema, model, Model, Document } from 'mongoose';

const schema = new Schema({
  unverifiedRoleID: {
    type: String,
    required: true
  },
  guildID: {
    type: String,
    required: true
  }
}, {versionKey: false});

const unverifiedRoleModel = model('unverifiedRole', schema, 'unverifiedRole');

export default unverifiedRoleModel;