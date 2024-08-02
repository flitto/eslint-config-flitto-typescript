interface Room {
  id: number
  name: string
}
const rooms: Room[] = [
  {
    id: 1,
    name: 'Babylon',
  },
  {
    id: 2,
    name: 'Pangea',
  },
  {
    id: 3,
    name: 'Agora',
  },
]

const getRandomId = (): number => Math.floor(Math.random() * 10)
const foundRoom: Room | undefined = rooms.find(({ id }) => id === getRandomId())

if (foundRoom) {
  console.log('Nullable objects are allowed as a condition')
}
