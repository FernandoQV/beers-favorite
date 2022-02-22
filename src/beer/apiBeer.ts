import axios from "axios"

const apiBeers = {
  getAll: async () => {
    const beers = await axios.get("https://api.punkapi.com/v2/beers").then((bs) => bs.data)

    return beers
  },
  getBeer: async (id: string) => {
    const beer = await axios.get(`https://api.punkapi.com/v2/beers/${id}`).then((b) => b.data)

    return beer
  },
}

export default apiBeers
