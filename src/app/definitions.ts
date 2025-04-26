type VolumeSchema = {
    volume: string,
}

type EffectSchema = {
    description: string
}

type CategorySchema = {
    name: string
    description: string
}

type ExpirationDateSchema = {
    before_opening: string,
    after_opening: string
}

type IngredientSchema = {
    name: string,
    description: string
}

type FlavorSchema = {
    name: string,
    description: string,
    ingredients: IngredientSchema[],
}

export type CatalogProductsSchema = {
    id: number,
    name: string,
    name_ru: string,
    articule: number
    type: string, 
}

export type BestsellersSchema = {
    id: number,
    name: string,
    name_ru: string,
    type: string,
    reviews: number,
    ingredients: string[],
  }

  export type ProductSchema = {
    id: number,
    name: string,
    note: string,
    volumes: VolumeSchema[],
    flavor: FlavorSchema,
    articule: number,
    attention: string,
    expiration_date: ExpirationDateSchema,
    category: CategorySchema,
    effects: EffectSchema[],
}