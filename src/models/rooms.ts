import fs from 'fs';
import path from 'path';
import config from '../config';
import exits, { Exits } from '../data/exits';
import { Zone } from '../data/zones';
import { roomZone } from './zones';

export interface Room {
  roomId: number,
  exits: Exits,
  zone?: Zone,
  name: string,
  description: string,
  death: boolean,
  noBrief: boolean,
  dark: boolean,

  // fileName: string,
  // contents: string,
}

const getFileName = (roomId: number): string => path.join(config.roomsPath, `${roomId}`);

const loadFile = (fileName: string): Promise<Buffer> => new Promise((resolve, reject) => fs
  .readFile(fileName, (err, data) => err ? reject(err) : resolve(data)));

const isDark = (roomId: number): boolean => {
  if ((roomId === 1100) || (roomId === 1101)) {
    return false;
  } else if ((roomId >= 1113) && (roomId <= 1123)) {
    return true;
  } else {
    return !((roomId > 399) || (roomId < 300));
  }
};

const loadRoom = (roomId: number) => loadFile(getFileName(roomId))
  .then((data) => {
    // const fileName = getFileName(roomId);
    const zone = roomZone(roomId);
    const contents = data.toString();
    const room: Room = {
      roomId,
      exits: {
        north: 0,
        east: 0,
        south: 0,
        west: 0,
        up: 0,
        down: 0,
      },
      zone,
      name: '',
      description: '',
      death: false,
      noBrief: false,
      dark: isDark(roomId),

      // fileName,
      // contents,
    };
    contents
      .split('\n')
      .forEach((row, rowId) => {
        if (rowId < exits.length) {
          const exitId = exits[rowId];
          const value = Number(row);
          room.exits[exitId] = (value > 1000) ? 1000 - value : -value;
        } else if (rowId === exits.length) {
          room.name = row;
        } else if (row === '#DIE') {
          room.death = true;
        } else if (row === '#NOBR') {
          room.noBrief = true;
        } else {
          room.description += `${row}\n`;
        }
      });
    return room;
  })
  .catch(() => undefined);

export default () => {
  const result = [];
  for (let i = 0; i < 1500; i += 1) {
    result.push(loadRoom(i));
  }
  return Promise.all(result)
    .then(rooms => rooms.filter(room => room));
};
