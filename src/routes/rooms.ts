import express from 'express';

import getRooms from '../models/rooms';
import ContentsResponse from '../interfaces/ContentsResponse';

const router = express.Router();

router.get<{}, ContentsResponse>('/', async (req, res) => {
  const rooms = await getRooms();
  return res.json({
    rooms,
  });
});

export default router;
