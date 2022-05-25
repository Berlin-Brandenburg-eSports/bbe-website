import { Page } from './enums';
import { Game } from './interfaces';

export type Href = `${Page}`;
export type NodeEnv = 'development' | 'production' | 'test';
export type UploadDir = 'images' | 'documents' | 'videos';
export type UploadFormat = 'webp' | 'webm' | 'pdf';

export type GameEdit = Omit<Game, 'image'> & { image: string };
