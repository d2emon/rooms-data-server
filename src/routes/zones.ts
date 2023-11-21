import { Router } from 'express';
import zones from '../data/zones';

const router = Router();

router.get('/', (req, res) => {
  res.json({ zones });
});

export default router;
