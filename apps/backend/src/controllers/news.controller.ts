import { RequestHandler } from 'express';
import NewsUtil from '../utils/news.util';
import Controller from './base.controller';

export default class NewsController extends Controller {
  public setupRouter(): void {
    this.createRoute('/news').get(this.getNews).all(this.notAllowed);
  }

  private getNews: RequestHandler = async (_req, res, next) => {
    try {
      const news = await NewsUtil.getNews();

      res.send(news);
    } catch (error) {
      next(error);
    }
  };
}
