import ratings from '../../ratings';
import { effortMultipliersED } from '../../effortMultipliers';

const earlyDesign = {
  [effortMultipliersED.PERS]: {
    [ratings.EXTRA_LOW]: 2.12,
    [ratings.VERY_LOW]: 1.62,
    [ratings.LOW]: 1.26,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.83,
    [ratings.VERY_HIGH]: 0.63,
    [ratings.EXTRA_HIGH]: 0.5,
  },
  [effortMultipliersED.PREX]: {
    [ratings.EXTRA_LOW]: 1.59,
    [ratings.VERY_LOW]: 1.33,
    [ratings.LOW]: 1.22,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.87,
    [ratings.VERY_HIGH]: 0.74,
    [ratings.EXTRA_HIGH]: 0.62,
  },
  [effortMultipliersED.RCPX]: {
    [ratings.EXTRA_LOW]: 0.49,
    [ratings.VERY_LOW]: 0.6,
    [ratings.LOW]: 1.83,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.33,
    [ratings.VERY_HIGH]: 1.91,
    [ratings.EXTRA_HIGH]: 2.72,
  },
  [effortMultipliersED.RUSE]: {
    [ratings.EXTRA_LOW]: null,
    [ratings.VERY_LOW]: null,
    [ratings.LOW]: 0.95,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.07,
    [ratings.VERY_HIGH]: 1.15,
    [ratings.EXTRA_HIGH]: 1.24,
  },
  [effortMultipliersED.PDIF]: {
    [ratings.EXTRA_LOW]: null,
    [ratings.VERY_LOW]: null,
    [ratings.LOW]: 0.87,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.29,
    [ratings.VERY_HIGH]: 1.81,
    [ratings.EXTRA_HIGH]: 2.61,
  },
  [effortMultipliersED.FCIL]: {
    [ratings.EXTRA_LOW]: 1.43,
    [ratings.VERY_LOW]: 1.3,
    [ratings.LOW]: 1.14,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.87,
    [ratings.VERY_HIGH]: 0.73,
    [ratings.EXTRA_HIGH]: 0.62,
  },
  [effortMultipliersED.SCED]: {
    [ratings.EXTRA_LOW]: null,
    [ratings.VERY_LOW]: 1.43,
    [ratings.LOW]: 1.14,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1,
    [ratings.VERY_HIGH]: null,
    [ratings.EXTRA_HIGH]: null,
  },
};

export default earlyDesign;
