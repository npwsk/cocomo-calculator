import coefficients from '../../constants/coefficients';
import cocomo2 from '../../constants/values/cocomo2';
import { effortMultipliersED } from '../../constants/effortMultipliers';

const calcSfSum = (sfObj) =>
  Object.entries(sfObj)
    .map(([sf, rating]) => [sf, cocomo2[sf][rating]])
    .reduce((sum, val) => val + sum, 0);

const calcE = (sfObj) => 0.91 + 0.01 * calcSfSum(sfObj);

const calcPM = ({ stage, scaleFactors, effortMutipliers, size }) => {
  const { [coefficients.A]: a } = cocomo2[stage];

  const emProduct = Object.entries(effortMutipliers)
    .map(([em, rating]) => cocomo2[stage][em][rating])
    .reduce((product, em) => product * em, 1);

  const e = calcE(scaleFactors);

  return emProduct * a * size ** e;
};

const calcTM = ({ stage, scaleFactors, pm }) => {
  const {
    [effortMultipliersED.SCED]: sced,
    [coefficients.B]: b,
    [coefficients.C]: c,
    [coefficients.D]: d,
  } = cocomo2[stage];
  const e = calcE(scaleFactors);

  const pow = d + 0.2 * (e - b);

  return sced * c * pm ** pow;
};

export { calcPM, calcTM };
