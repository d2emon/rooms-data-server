import { Router } from 'express';
import zones from '../data/zones';
import getRooms from '../models/rooms';

const router = Router();

router.get('/', (req, res) => getRooms()
    .then(rooms => res.json({
        zones,
        rooms,
    }))
    .catch(error => res.json({ error }))
);

export default router;
