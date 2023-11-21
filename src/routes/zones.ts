import express from 'express';

import zones from '../data/zones';
import ContentsResponse from '../interfaces/ContentsResponse';

const router = express.Router();

router.get<{}, ContentsResponse>('/', (req, res) => {
  return res.json({ zones });
});

export default router;
