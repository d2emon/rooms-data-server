import zones, { Zone } from '../data/zones';

export const roomZone = (roomId: number): Zone => {
    if (!roomId) {
        return zones
            .find((zone) => (zone.startRoomId === undefined));
    } else {
        return zones
            .find((zone) => zone.startRoomId && (zone.startRoomId >= roomId))
    }
};
