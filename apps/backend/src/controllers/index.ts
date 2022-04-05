import { Router } from 'express';
import { env } from '../configs/env.config';

const router = Router();

router.get('/', (req, res, next) => {
  try {
    res.send({ name: 'Berlin Brandenburg eSports e.V.', env: env.NODE_ENV, version: req.baseUrl });
  } catch (error) {
    next(error);
  }
});

export default router;
