import { Room } from '../models/rooms';
import { Zone } from '../data/zones';

export default interface ContentsResponse {
  rooms?: (Room | undefined)[];
  zones?: Zone[];
}
