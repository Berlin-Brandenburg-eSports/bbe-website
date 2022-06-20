import { Team } from '@bbe/types';
import mongoose from 'mongoose';
import autopopulate from 'mongoose-autopopulate';
import slugify from 'slugify';
import validator from 'validator';

const TeamSchema = new mongoose.Schema<Omit<Team, 'image'> & { image: string }>({
  game: {
    type: String,
    required: true,
  },
  members: {
    type: [String],
    default: [],
  },
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
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'image',
    autopopulate: true,
  },
});

TeamSchema.plugin(autopopulate);

TeamSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = slugify(this.name.toLowerCase());
  }

  next();
});

export const TeamModel = mongoose.model('team', TeamSchema);
