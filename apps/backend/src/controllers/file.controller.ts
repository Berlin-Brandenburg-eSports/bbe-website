import { Role } from '@bbe/types';
import { RequestHandler } from 'express';
import createHttpError from 'http-errors';
import { isAuthenticated } from '../middlewares/auth.middleware';
import { ImageUtil } from '../utils/image.util';
import UploadUtil from '../utils/upload.util';
import Controller from './base.controller';

export default class FileController extends Controller {
  public setupRouter(): void {
    this.createRoute('/images').get(this.getImages).post(isAuthenticated(Role.Department), this.uploadImages).all(this.notAllowed);
    this.createRoute('/images/:name').get(this.getImage).delete(isAuthenticated(Role.Department), this.deleteImage).all(this.notAllowed);
  }

  private getImages: RequestHandler = async (_req, res, next) => {
    try {
      const images = await ImageUtil.getImages();
      res.send(images);
    } catch (error) {
      next(error);
    }
  };

  private uploadImages: RequestHandler = async (req, res, next) => {
    try {
      if (!req.files || !req.files.images) {
        throw createHttpError(400, 'No images provides');
      }

      const data = await UploadUtil.uploadImages(req.files.images);
      const images = await ImageUtil.addImages(data);
      res.send(images);
    } catch (error) {
      next(error);
    }
  };

  private getImage: RequestHandler = async (req, res, next) => {
    try {
      const { name } = req.params;
      const image = await ImageUtil.getImage(name);

      res.send(image);
    } catch (error) {
      next(error);
    }
  };

  private deleteImage: RequestHandler = async (req, res, next) => {
    try {
      const { name } = req.params;
      const result = await ImageUtil.deleteImage(name);
      UploadUtil.deleteImage(name);

      res.send(result);
    } catch (error) {
      next(error);
    }
  };
}
