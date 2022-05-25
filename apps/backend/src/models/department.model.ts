import { Department } from '@bbe/types';
import mongoose from 'mongoose';
import slugify from 'slugify';
import validator from 'validator';

const DepartmentSchema = new mongoose.Schema<Department>({
  leader: {
    type: String,
  },
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
  roleId: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isNumeric,
    },
  },
});

DepartmentSchema.pre('save', function (next) {
  if (!this.slug) {
    this.slug = slugify(this.name.toLowerCase());
  }

  next();
});

export const DepartmentModel = mongoose.model('department', DepartmentSchema);
