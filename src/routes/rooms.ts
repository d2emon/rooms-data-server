import { Router } from 'express';
import getRooms from '../models/rooms';

const router = Router();

router.get('/', (req, res) => getRooms()
    .then(rooms => res.json({
        rooms,
    }))
    .catch(error => res.json({ error }))
);

export default router;
