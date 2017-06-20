// @flow
declare var test: any;
declare var expect: any;
import { recipe, equipment } from './data/Kolsch'
import { recipeTest } from './recipeTest'

const expected = {
  OG: 1.036,
  IbuTinseth: 1,
  IbuRager: 1,

  MashGrainWeight: 4.32,
  MashGrainAbsorbtion: 2.64,
  TotalMashWaterAdds: 33.02,
  MashVolumeNeeded: 35.91,
  WaterAvailFromMash: 30.38,
  SpargeVol: 0,
  EstPreBoilVolume: 30.38,
  BoilOffVolume: 7.28,
  PostBoilVolume: 23.1,
  CoolingShrinkage: 0.92,
  EstBottlingVol: 0,
  TotalWater: 33.02,

  EstABW: 0,
  //5.1
  EstABV: 4.84,
  EstABVRE: 4.83,

  //3.7
  ColorSRMvalue: 4.1,
  ColorEBCvalue: 8.1,

  YeastNeeded: 128.47,
  GrowthRate: 1.4,
  //960
  YeastCount: 993.7,

  KegPressure: 69.67,
  KegSugar: 32,
  CornSugar: 64,
  Dme: 98.5
}

recipeTest(expected, recipe, equipment)
