import { CorsOptions } from 'cors';
import { env } from './env.config';

const corsOptions: CorsOptions = {
  origin: [env.API_URL, env.FRONTEND_URL],
  credentials: true,
  methods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'PATCH', 'POST', 'DELETE'],
};

export default corsOptions;
