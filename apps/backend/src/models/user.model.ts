import { Contact, Discord, env, Payment, Role, User } from '@bbe/types';
import CryptoJS from 'crypto-js';
import mongoose from 'mongoose';
import validator from 'validator';

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

const PaymentSchema = new mongoose.Schema<Payment>(
  {
    accountOwner: {
      type: String,
    },
    bic: {
      type: String,
      required: true,
      set: (bic: string) => bic.toUpperCase(),
      validate: {
        validator: validator.isBIC,
        message: 'Please provide a valid BIC',
      },
    },
    iban: {
      type: String,
      required: true,
      validate: {
        validator: validator.isIBAN,
        message: 'Please provide a valid IBAN',
      },
    },
    institution: {
      type: String,
      required: true,
    },
    reduced: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false }
);

const DiscordSchema = new mongoose.Schema<Discord>(
  {
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
        validator: (input: number) => validator.isLength(input.toString(), { min: 4, max: 4 }) && validator.isNumeric(input.toString()),
        message: 'discriminator must be numeric with a length of 4 digits',
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
  },
  { _id: false }
);

const ContactSchema = new mongoose.Schema<Contact>(
  {
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
      type: String,
      default: '',
      validate: {
        validator: (zip: string) => (!zip.length ? true : validator.isPostalCode(zip, 'DE')),
      },
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
    phone: {
      type: String,
      validate: {
        validator: (phone: string) => validator.isMobilePhone(phone, 'de-DE'),
      },
    },
  },
  { _id: false }
);

const UserSchema = new mongoose.Schema<User>(
  {
    id: {
      type: String,
      index: true,
      unique: true,
      required: true,
      validate: {
        validator: validator.isNumeric,
        message: 'id must be numeric',
      },
    },
    memberId: {
      type: String,
      unique: true,
      sparse: true,
      validate: {
        validator: validator.isNumeric,
        message: 'memberId must be numeric',
      },
    },
    website: {
      type: Boolean,
      default: false,
    },
    server: {
      type: Boolean,
      default: false,
    },
    discord: {
      type: DiscordSchema,
      required: true,
    },
    role: {
      type: String,
      enum: Role,
      default: Role.User,
    },
    payment: {
      type: PaymentSchema,
    },
    contact: {
      type: ContactSchema,
      required: true,
    },
    teams: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

export const UserModel = mongoose.model('users', UserSchema);
