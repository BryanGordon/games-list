type GamesData = {
  name: string
  header_image: string
  capsule_image: string
  capsule_imagev5: string
}

interface Games {
  id: string
  data: GamesData
}

const games: Games[] = [
  {
    id: "1174180",
    data: {
      name: "Red Dead Redemption 2",
      header_image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1714055653",
      capsule_image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/capsule_231x87.jpg?t=1714055653",
      capsule_imagev5: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/capsule_184x69.jpg?t=1714055653",
    },
  },
  
]