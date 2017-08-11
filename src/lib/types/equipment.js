// @flow
export type Equipment = {
  name: string,
  batchSize: number,
  boilSize: number,
  efficiency: number,
  evapRate: number,
  coolingLossPct: number,
  trubChillerLoss: number,
  lauterDeadspace: number,
  topUpKettle: number,
  BIAB: boolean
};