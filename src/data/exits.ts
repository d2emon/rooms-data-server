export type ExitId = 'north' | 'east' | 'south' | 'west' | 'up' | 'down';

export interface Exits {
    north: number,
    east: number,
    south: number,
    west: number,
    up: number,
    down: number,
}

const exits: ExitId[] = [
    'north',
    'east',
    'south',
    'west',
    'up',
    'down',
];

export default exits;
