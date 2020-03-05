export interface Zone {
    name: string,
    startRoomId?: number,
}

const zones: Zone[] = [
    {name: "TCHAN", startRoomId: undefined},
    {name: "LIMBO", startRoomId: 1},
    {name: "WSTORE", startRoomId: 2},
    {name: "HOME", startRoomId: 4},
    {name: "START", startRoomId: 5},
    {name: "PIT", startRoomId: 6},
    {name: "WIZROOM", startRoomId: 19},
    {name: "DEAD", startRoomId: 99},
    {name: "BLIZZARD", startRoomId: 299},
    {name: "CAVE", startRoomId: 399},
    {name: "LABRNTH", startRoomId: 499},
    {name: "FOREST", startRoomId: 599},
    {name: "VALLEY", startRoomId: 699},
    {name: "MOOR", startRoomId: 799},
    {name: "ISLAND", startRoomId: 899},
    {name: "SEA", startRoomId: 999},
    {name: "RIVER", startRoomId: 1049},
    {name: "CASTLE", startRoomId: 1069},
    {name: "TOWER", startRoomId: 1099},
    {name: "HUT", startRoomId: 1101},
    {name: "TREEHOUSE", startRoomId: 1105},
    {name: "QUARRY", startRoomId: 2199},
    {name: "LEDGE", startRoomId: 2299},
    {name: "INTREE", startRoomId: 2499},
    {name: "WASTE", startRoomId: 99999},
];

export default zones;
