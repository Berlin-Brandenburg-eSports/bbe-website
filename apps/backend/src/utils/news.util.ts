import { News } from '@bbe/types';
import { NewsModel } from '../models/news.model';

export default class NewsUtil {
  public static async getNews(): Promise<News[]> {
    return NewsModel.find().sort({ createdAt: -1 }).lean();
  }
}
