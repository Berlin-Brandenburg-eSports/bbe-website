import { Image } from '@bbe/types';
import axios from 'axios';
import useSWR, { SWRResponse } from 'swr';
import { fetcher } from '../configs/axios.config';

export const useImages = (): SWRResponse<Image[]> => {
  return useSWR<Image[]>('/images', fetcher);
};

export class FileService {
  public static async uploadImages(formData: FormData): Promise<Image[]> {
    const { data } = await axios.post('/images', formData);

    return data;
  }

  public static async getImages(): Promise<Image[]> {
    const { data } = await axios.get('/images');

    return data;
  }

  public static async deleteImage(filename: string): Promise<void> {
    await axios.delete(`/images/${filename}`);
  }
}
