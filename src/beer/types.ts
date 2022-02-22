interface IVolumenBeer {
  value: number
  unit: string
}
type ITemp = {
  value: number
  unit: string
}
type MashTemp = {
  temp: ITemp
  duration: number
}
type IFermentacion = {
  temp: ITemp
}
type IIngredienteDetails = {
  name: string
  amount: {
    value: number
    unit: string
  }
}
type IHops = IIngredienteDetails & {
  add: string
  attribute: string
}
export interface IBeer {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attenuation_level: number
  volume: IVolumenBeer
  boil_volume: IVolumenBeer
  method: {
    mash_temp: MashTemp[]
    fermentation: IFermentacion
    twist: string
  }
  ingredients: {
    malt: IIngredienteDetails[]

    hops: IHops[]
    yeast: string
  }
  food_pairing: string[]
  brewers_tips: string
  contributed_by: string
}
