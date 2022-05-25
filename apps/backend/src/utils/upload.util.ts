import { env, Image, UploadDir, UploadFormat } from '@bbe/types';
import { UploadedFile } from 'express-fileupload';
import { mkdirSync, readdirSync, readFileSync, unlinkSync } from 'fs';
import { isArray } from 'lodash';
import { join, parse } from 'path';
import { getPlaiceholder } from 'plaiceholder';
import sharp from 'sharp';
import slugify from 'slugify';

export default class UploadUtil {
  private static getFiles(files: UploadedFile | UploadedFile[]): UploadedFile[] {
    return isArray(files) ? files : [files];
  }

  private static getHref(dir: UploadDir, filename: string): string {
    const path = join(dir, filename);

    return new URL(path, env.API_URL).href;
  }

  private static getDir(dir: UploadDir): string {
    const path = join(__dirname, 'public', dir);

    if (!readdirSync(path)) {
      mkdirSync(path);
    }

    return path;
  }

  private static deleteFile(dir: UploadDir, name: string): void {
    const path = join(__dirname, 'public', dir, name);

    if (readFileSync(path)) {
      unlinkSync(path);
    }
  }

  private static getFilename(file: string, format: UploadFormat): string {
    return `${slugify(parse(file).name.toLowerCase())}.${format}`;
  }

  private static async getBase64(file: Buffer): Promise<string> {
    try {
      const { base64 } = await getPlaiceholder(file);

      return base64;
    } catch (error) {
      return '';
    }
  }

  public static async uploadImages(images: UploadedFile | UploadedFile[]): Promise<Image[]> {
    const files = this.getFiles(images);
    const upload: Image[] = [];
    const dir = this.getDir('images');

    await Promise.all(
      files.map(async (file) => {
        const filename = this.getFilename(file.name, 'webp');
        const location = join(dir, filename);
        const { width, height, size } = await sharp(file.data, { animated: true }).webp().toFile(location);
        const base64 = await this.getBase64(file.data);
        upload.push({ src: this.getHref('images', filename), width, height, size, base64, name: filename });
      })
    );

    return upload;
  }

  public static deleteImage(filename: string): void {
    this.deleteFile('images', filename);
  }
}
