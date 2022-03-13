import coefficients from '../../constants/coefficients';
import cocomo2 from '../../constants/values/cocomo2';
import { effortMultipliersED } from '../../constants/effortMultipliers';

const calcSfSum = (sfObj) =>
  Object.entries(sfObj)
    .map(([sf, rating]) => cocomo2[sf][rating])
    .reduce((sum, val) => val + sum, 0);

const calcE = (sfObj) => 0.91 + 0.01 * calcSfSum(sfObj);

const calcPM = ({ stage, scaleFactors, effortMultipliers, size }) => {
  const { [coefficients.A]: a } = cocomo2[stage];

  const emProduct = Object.entries(effortMultipliers[stage])
    .map(([em, rating]) => cocomo2[stage][em][rating])
    .reduce((product, em) => product * em, 1);

  const e = calcE(scaleFactors);

  return (emProduct * a * size ** e).toFixed(2);
};

const calcTM = ({ stage, scaleFactors, effortMultipliers, size }) => {
  const { [coefficients.B]: b, [coefficients.C]: c, [coefficients.D]: d } = cocomo2;

  const scedValue = effortMultipliers[stage][effortMultipliersED.SCED];

  const sced = cocomo2[stage][effortMultipliersED.SCED][scedValue];

  const e = calcE(scaleFactors);

  const pow = d + 0.2 * (e - b);

  const pm = calcPM({ stage, scaleFactors, effortMultipliers, size });

  return (sced * c * pm ** pow).toFixed(2);
};

export { calcPM, calcTM };
