import { Image } from '@bbe/types';
import createHttpError from 'http-errors';
import { DeleteResult } from 'mongodb';
import { ImageModel } from '../models/image.model';

export class ImageUtil {
  public static async getImages(): Promise<Image> {
    return ImageModel.find().lean();
  }

  public static async getImage(name: Image['name']): Promise<Image> {
    const image = await ImageModel.findOne({ name }).lean();

    if (!image) throw createHttpError(404, 'Image not found', { name });

    return image;
  }

  public static async addImages(data: Image[]): Promise<Image[]> {
    const images = await ImageModel.insertMany(data);

    return images.map((image) => image.toObject());
  }

  public static async deleteImage(name: Image['name']): Promise<DeleteResult> {
    return ImageModel.deleteOne({ name });
  }
}
