import { Game } from '@bbe/types';
import mongoose from 'mongoose';
import autopopulate from 'mongoose-autopopulate';
import slugify from 'slugify';
import validator from 'validator';

const GameSchema = new mongoose.Schema<Game>({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
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
  description: {
    type: String,
    default: '',
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'image',
    autopopulate: true,
  },
});

GameSchema.plugin(autopopulate);

GameSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = slugify(this.name.toLowerCase());
  }

  next();
});

export const GameModel = mongoose.model('game', GameSchema);
