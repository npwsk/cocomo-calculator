import ratings from '../../ratings';
import { effortMultipliersPA } from '../../effortMultipliers';

const postArchitecture = {
  [effortMultipliersPA.ACAP]: {
    [ratings.VERY_LOW]: 1.42,
    [ratings.LOW]: 1.29,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.85,
    [ratings.VERY_HIGH]: 0.71,
    [ratings.EXTRA_HIGH]: null,
  },
  [effortMultipliersPA.AEXP]: {
    [ratings.VERY_LOW]: 1.22,
    [ratings.LOW]: 1.1,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.88,
    [ratings.VERY_HIGH]: 0.81,
    [ratings.EXTRA_HIGH]: null,
  },
  [effortMultipliersPA.PCAP]: {
    [ratings.VERY_LOW]: 1.34,
    [ratings.LOW]: 1.15,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.88,
    [ratings.VERY_HIGH]: 0.76,
    [ratings.EXTRA_HIGH]: null,
  },
  [effortMultipliersPA.PCON]: {
    [ratings.VERY_LOW]: 1.29,
    [ratings.LOW]: 1.12,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.9,
    [ratings.VERY_HIGH]: 0.81,
    [ratings.EXTRA_HIGH]: null,
  },
  [effortMultipliersPA.PEXP]: {
    [ratings.VERY_LOW]: 1.19,
    [ratings.LOW]: 1.09,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.91,
    [ratings.VERY_HIGH]: 0.85,
    [ratings.EXTRA_HIGH]: null,
  },
  [effortMultipliersPA.LTEX]: {
    [ratings.VERY_LOW]: 1.2,
    [ratings.LOW]: 1.09,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.91,
    [ratings.VERY_HIGH]: 0.84,
    [ratings.EXTRA_HIGH]: null,
  },
  [effortMultipliersPA.RELY]: {
    [ratings.VERY_LOW]: 0.84,
    [ratings.LOW]: 0.92,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.1,
    [ratings.VERY_HIGH]: 1.26,
    [ratings.EXTRA_HIGH]: null,
  },
  [effortMultipliersPA.DATA]: {
    [ratings.VERY_LOW]: null,
    [ratings.LOW]: 0.23,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.14,
    [ratings.VERY_HIGH]: 1.28,
    [ratings.EXTRA_HIGH]: null,
  },
  [effortMultipliersPA.CPLX]: {
    [ratings.VERY_LOW]: 0.73,
    [ratings.LOW]: 0.87,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.17,
    [ratings.VERY_HIGH]: 1.34,
    [ratings.EXTRA_HIGH]: 1.74,
  },
  [effortMultipliersPA.RUSE]: {
    [ratings.VERY_LOW]: null,
    [ratings.LOW]: 0.95,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.07,
    [ratings.VERY_HIGH]: 1.15,
    [ratings.EXTRA_HIGH]: 1.24,
  },
  [effortMultipliersPA.DOCU]: {
    [ratings.VERY_LOW]: 0.81,
    [ratings.LOW]: 0.91,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.11,
    [ratings.VERY_HIGH]: 1.23,
    [ratings.EXTRA_HIGH]: null,
  },
  [effortMultipliersPA.TIME]: {
    [ratings.VERY_LOW]: null,
    [ratings.LOW]: null,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.11,
    [ratings.VERY_HIGH]: 1.29,
    [ratings.EXTRA_HIGH]: 1.63,
  },
  [effortMultipliersPA.STOR]: {
    [ratings.VERY_LOW]: null,
    [ratings.LOW]: null,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.05,
    [ratings.VERY_HIGH]: 1.17,
    [ratings.EXTRA_HIGH]: 1.46,
  },
  [effortMultipliersPA.PVOL]: {
    [ratings.VERY_LOW]: null,
    [ratings.LOW]: 0.87,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1.15,
    [ratings.VERY_HIGH]: 1.3,
    [ratings.EXTRA_HIGH]: null,
  },
  [effortMultipliersPA.TOOL]: {
    [ratings.VERY_LOW]: 1.17,
    [ratings.LOW]: 1.09,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.9,
    [ratings.VERY_HIGH]: 0.78,
    [ratings.EXTRA_HIGH]: null,
  },
  [effortMultipliersPA.SITE]: {
    [ratings.VERY_LOW]: 1.22,
    [ratings.LOW]: 1.09,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 0.93,
    [ratings.VERY_HIGH]: 0.86,
    [ratings.EXTRA_HIGH]: 0.8,
  },
  [effortMultipliersPA.SCED]: {
    [ratings.VERY_LOW]: 1.43,
    [ratings.LOW]: 1.14,
    [ratings.NOMINAL]: 1,
    [ratings.HIGH]: 1,
    [ratings.VERY_HIGH]: 1,
    [ratings.EXTRA_HIGH]: null,
  },
};

export default postArchitecture;
