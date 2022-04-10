import { User } from '@bbe/types';
import CryptoJS from 'crypto-js';
import mongoose from 'mongoose';
import { env } from '../configs/env.config';

function encrypt(text: string): string {
  return CryptoJS.AES.encrypt(text, env.CRYPTO_SECRET).toString();
}

function decrypt(text: string): string {
  if (text === null || typeof text === 'undefined') {
    return text;
  }

  const decrypted = CryptoJS.AES.decrypt(text, env.CRYPTO_SECRET);

  return decrypted.toString(CryptoJS.enc.Utf8);
}

const UserSchema = new mongoose.Schema<User>(
  {
    id: {
      type: String,
      index: true,
      unique: true,
      required: true,
      validate: /^[\d]$/gi,
    },
    displayName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    discriminator: {
      type: Number,
      required: true,
      validate: /^[\d]{4}$/,
    },
    tag: {
      type: String,
      index: true,
      unique: true,
      required: true,
      validate: /^.{3,32}#[0-9]{4}$/gi,
    },
    avatar: {
      type: String,
      required: true,
    },
    joined: {
      type: Boolean,
      default: false,
    },
    accessToken: {
      type: String,
      required: true,
      select: false,
      get: decrypt,
      set: encrypt,
    },
    refreshToken: {
      type: String,
      required: true,
      select: false,
      get: decrypt,
      set: encrypt,
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

export const UserModel = mongoose.model('users', UserSchema);
