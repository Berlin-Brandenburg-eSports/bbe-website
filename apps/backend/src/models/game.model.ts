import { Game } from '@bbe/types';
import mongoose from 'mongoose';
import slugify from 'slugify';
import validator from 'validator';

const GameSchema = new mongoose.Schema<Game>({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    index: true,
    unique: true,
    set: (slug: string) => slugify(slug.toLowerCase()),
    validate: {
      validator: validator.isSlug,
    },
  },
  teams: {
    type: [String],
    default: [],
  },
});

GameSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = slugify(this.name.toLowerCase());
  }

  next();
});

export const GameModel = mongoose.model('games', GameSchema);
