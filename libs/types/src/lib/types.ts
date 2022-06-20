import { Page } from './enums';
import { Game, Team, User } from './interfaces';

export type Href = `${Page}`;
export type NodeEnv = 'development' | 'production' | 'test';
export type UploadDir = 'images' | 'documents' | 'videos';
export type UploadFormat = 'webp' | 'webm' | 'pdf';

export type GameEdit = Omit<Game, 'image'> & { image: string };
export type TeamEdit = Omit<Team, 'image'> & { image: string };
export type UserEdit = Omit<User, 'image'> & { image: string };
