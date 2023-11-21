import express from 'express';

import zones from '../data/zones';
import getRooms from '../models/rooms';
import ContentsResponse from '../interfaces/ContentsResponse';

const router = express.Router();

router.get<{}, ContentsResponse>('/', async (req, res) => {
  const rooms = await getRooms();
  return res.json({
    zones,
    rooms,
  });
});

export default router;
