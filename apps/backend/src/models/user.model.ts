import { Payment, Role, User } from '@bbe/types';
import CryptoJS from 'crypto-js';
import mongoose from 'mongoose';
import validator from 'validator';
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

const PaymentSchema = new mongoose.Schema<Payment>({
  accountOwner: {
    type: String,
  },
  bic: {
    type: String,
    required: true,
    set: (bic: string) => bic.toUpperCase(),
    validate: {
      validator: validator.isBIC,
    },
  },
  iban: {
    type: String,
    required: true,
    validate: {
      validator: validator.isIBAN,
    },
  },
  institution: {
    type: String,
    required: true,
  },
});

const UserSchema = new mongoose.Schema<User>(
  {
    id: {
      type: String,
      index: true,
      unique: true,
      required: true,
      validate: {
        validator: validator.isNumeric,
      },
    },
    nick: {
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
      validate: {
        validator: (input: number) => validator.isLength(input.toString(), { min: 4, max: 4 }),
      },
    },
    tag: {
      type: String,
      index: true,
      unique: true,
      required: true,
      validate: {
        validator: (tag: string) => /^.{3,32}#[0-9]{4}$/gi.test(tag),
        message: 'Example: User#0000',
      },
    },
    avatar: {
      type: String,
      required: true,
    },
    discord: {
      type: Boolean,
      default: false,
    },
    website: {
      type: Boolean,
      default: false,
    },
    accessToken: {
      type: String,
      select: false,
      get: decrypt,
      set: encrypt,
      default: '',
    },
    refreshToken: {
      type: String,
      select: false,
      get: decrypt,
      set: encrypt,
      default: '',
    },
    address1: {
      type: String,
      default: '',
    },
    address2: {
      type: String,
      default: '',
    },
    city: {
      type: String,
      default: '',
    },
    firstname: {
      type: String,
      default: '',
    },
    lastname: {
      type: String,
      default: '',
    },
    zip: {
      type: Number,
      default: -1,
    },
    role: {
      type: Number,
      enum: Role,
      default: Role.User,
    },
    birthday: {
      type: Date,
    },
    email: {
      type: String,
      default: '',
      validate: {
        validator: validator.isEmail,
      },
    },
    payment: {
      type: PaymentSchema,
    },
    phone: {
      type: String,
      validate: {
        validator: (phone: string) => validator.isMobilePhone(phone, 'de-DE'),
      },
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

export const UserModel = mongoose.model('users', UserSchema);
