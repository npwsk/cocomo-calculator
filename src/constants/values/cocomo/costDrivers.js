import costDrivers from '../../costDrivers';
import ratings from '../../ratings';

const costDriversValues = {
  [costDrivers.SOFTWARE_RELIABILITY]: {
    [ratings.VERY_LOW]: 0.75,
    [ratings.LOW]: 0.88,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.15,
    [ratings.VERY_HIGH]: 1.4,
    [ratings.EXTRA_HIGH]: null,
  },
  [costDrivers.DATABASE_SIZE]: {
    [ratings.VERY_LOW]: null,
    [ratings.LOW]: 0.94,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.08,
    [ratings.VERY_HIGH]: 1.16,
    [ratings.EXTRA_HIGH]: null,
  },
  [costDrivers.PRODUCT_COMPLEXITY]: {
    [ratings.VERY_LOW]: 0.7,
    [ratings.LOW]: 0.85,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.15,
    [ratings.VERY_HIGH]: 1.3,
    [ratings.EXTRA_HIGH]: 1.65,
  },
  [costDrivers.RT_PERFORMANCE]: {
    [ratings.VERY_LOW]: null,
    [ratings.LOW]: null,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.11,
    [ratings.VERY_HIGH]: 1.3,
    [ratings.EXTRA_HIGH]: 1.66,
  },
  [costDrivers.MEMORY]: {
    [ratings.VERY_LOW]: null,
    [ratings.LOW]: null,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.06,
    [ratings.VERY_HIGH]: 1.21,
    [ratings.EXTRA_HIGH]: 1.56,
  },
  [costDrivers.VMENV_VOLATILITY]: {
    [ratings.VERY_LOW]: null,
    [ratings.LOW]: 0.87,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.15,
    [ratings.VERY_HIGH]: 1.3,
    [ratings.EXTRA_HIGH]: null,
  },
  [costDrivers.TURNABOUT_TIME]: {
    [ratings.VERY_LOW]: null,
    [ratings.LOW]: 0.87,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.15,
    [ratings.VERY_HIGH]: null,
    [ratings.EXTRA_HIGH]: null,
  },
  [costDrivers.ANALYST_CAPABILITY]: {
    [ratings.VERY_LOW]: 1.46,
    [ratings.LOW]: 1.19,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.86,
    [ratings.VERY_HIGH]: 0.71,
    [ratings.EXTRA_HIGH]: null,
  },
  [costDrivers.APPLICATIONS_EXPERIENCE]: {
    [ratings.VERY_LOW]: 1.29,
    [ratings.LOW]: 1.13,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.91,
    [ratings.VERY_HIGH]: 0.82,
    [ratings.EXTRA_HIGH]: null,
  },
  [costDrivers.SE_CAPABILITY]: {
    [ratings.VERY_LOW]: 1.42,
    [ratings.LOW]: 1.17,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.86,
    [ratings.VERY_HIGH]: 0.7,
    [ratings.EXTRA_HIGH]: null,
  },
  [costDrivers.VM_EXPERIENCE]: {
    [ratings.VERY_LOW]: 1.21,
    [ratings.LOW]: 1.1,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.9,
    [ratings.VERY_HIGH]: null,
    [ratings.EXTRA_HIGH]: null,
  },
  [costDrivers.PLANG_EXPERIENCE]: {
    [ratings.VERY_LOW]: 1.14,
    [ratings.LOW]: 1.07,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.95,
    [ratings.VERY_HIGH]: null,
    [ratings.EXTRA_HIGH]: null,
  },
  [costDrivers.SE_METHODS_APPLICATION]: {
    [ratings.VERY_LOW]: 1.24,
    [ratings.LOW]: 1.1,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.91,
    [ratings.VERY_HIGH]: 0.82,
    [ratings.EXTRA_HIGH]: null,
  },
  [costDrivers.SW_TOOLS_USE]: {
    [ratings.VERY_LOW]: 1.24,
    [ratings.LOW]: 1.1,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.91,
    [ratings.VERY_HIGH]: 0.83,
    [ratings.EXTRA_HIGH]: null,
  },
  [costDrivers.DEV_SCHEDULE]: {
    [ratings.VERY_LOW]: 1.23,
    [ratings.LOW]: 1.08,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.04,
    [ratings.VERY_HIGH]: 1.1,
    [ratings.EXTRA_HIGH]: null,
  },
};

export default costDriversValues;
