import { News } from '@bbe/types';
import mongoose from 'mongoose';
import slugify from 'slugify';
import validator from 'validator';

const NewsSchema = new mongoose.Schema<News>(
  {
    author: {
      type: String,
      required: true,
      validate: {
        validator: validator.isNumeric,
      },
    },
    content: {
      type: String,
      required: true,
    },
    editor: {
      type: String,
      required: true,
      validate: {
        validator: validator.isNumeric,
      },
    },
    publishedAt: {
      type: Date,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
      set: (slug: string) => slugify(slug.toLowerCase()),
      validate: {
        validator: validator.isSlug,
      },
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

NewsSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = slugify(this.title.toLowerCase());
  }

  next();
});

export const NewsModel = mongoose.model('news', NewsSchema);
