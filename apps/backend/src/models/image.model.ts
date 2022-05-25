import { Image } from '@bbe/types';
import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema<Image>({
  name: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  src: {
    type: String,
    required: true,
  },
  base64: {
    type: String,
    default: '',
  },
  height: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});

export const ImageModel = mongoose.model('image', ImageSchema);
