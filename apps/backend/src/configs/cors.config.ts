import { env } from '@bbe/types';
import { CorsOptions } from 'cors';

const corsOptions: CorsOptions = {
  origin: [env.API_URL, env.FRONTEND_URL, env.DASHBOARD_URL],
  credentials: true,
  methods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'PATCH', 'POST', 'DELETE'],
};

export default corsOptions;
