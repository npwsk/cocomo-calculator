import scaleFactors from '../../scaleFactors';
import ratings from '../../ratings';

const scaleFactorsValues = {
  [scaleFactors.PREC]: {
    [ratings.VERY_LOW]: 6.2,
    [ratings.LOW]: 4.96,
    [ratings.NOMINAL]: 3.72,
    [ratings.HIGH]: 2.48,
    [ratings.VERY_HIGH]: 1.24,
    [ratings.EXTRA_HIGH]: 0,
  },
  [scaleFactors.FLEX]: {
    [ratings.VERY_LOW]: 5.07,
    [ratings.LOW]: 4.05,
    [ratings.NOMINAL]: 3.04,
    [ratings.HIGH]: 2.03,
    [ratings.VERY_HIGH]: 1.01,
    [ratings.EXTRA_HIGH]: 0,
  },
  [scaleFactors.RESL]: {
    [ratings.VERY_LOW]: 7.07,
    [ratings.LOW]: 5.65,
    [ratings.NOMINAL]: 4.24,
    [ratings.HIGH]: 2.83,
    [ratings.VERY_HIGH]: 1.41,
    [ratings.EXTRA_HIGH]: 0,
  },
  [scaleFactors.TEAM]: {
    [ratings.VERY_LOW]: 5.48,
    [ratings.LOW]: 4.38,
    [ratings.NOMINAL]: 3.29,
    [ratings.HIGH]: 2.19,
    [ratings.VERY_HIGH]: 1.1,
    [ratings.EXTRA_HIGH]: 0,
  },
  [scaleFactors.PMAT]: {
    [ratings.VERY_LOW]: 7.8,
    [ratings.LOW]: 6.24,
    [ratings.NOMINAL]: 4.68,
    [ratings.HIGH]: 3.12,
    [ratings.VERY_HIGH]: 1.56,
    [ratings.EXTRA_HIGH]: 0,
  },
};

export default scaleFactorsValues;
