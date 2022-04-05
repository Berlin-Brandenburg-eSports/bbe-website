import { User } from '@bbe/types';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema<User>(
  {
    id: {
      type: Number,
      index: true,
      unique: true,
      required: true,
    },
    accessToken: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
  },
  { id: false, timestamps: true }
);

export const UserModel = mongoose.model('users', UserSchema);
