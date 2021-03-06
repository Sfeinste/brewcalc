// @flow
import type { Fermentable } from './fermentable'
import type { Yeast } from './yeast'
import type { Hop } from './hop'
import type { Mash } from './mash'

export type Recipe = {
  name: string,
  brewer: string,
  type: 'Extract' | 'All Grain' | 'Partial Mash',
  batchSize: number,
  boilSize: number,
  boilTime: number,
  efficiency: number,
  hops: Array<Hop>,
  fermentables: Array<Fermentable>,
  yeasts: Array<Yeast>,
  mash: Mash
}

export const RecipeTypes = {
  extract: 'Extract',
  partialMash: 'Partial Mash',
  allGrain: 'All Grain'
}
