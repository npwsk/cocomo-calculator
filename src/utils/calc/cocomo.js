import levels from '../../constants/levels';
import cocomo from '../../constants/values/cocomo';
import coefficients from '../../constants/coefficients';

const calcPM = ({ projectType, level, costDrivers, size }) => {
  const { [coefficients.A]: a, [coefficients.B]: b } = cocomo[projectType][level];

  switch (level) {
    case levels.BASIC:
      return (a * size ** b).toFixed(2);

    case levels.INTERMEDIATE:
      const costDriversProduct = Object.entries(costDrivers)
        .map(([cd, rating]) => [cd, cocomo[cd][rating]])
        .reduce((product, val) => product * val, 1);
      return (costDriversProduct * a * size ** b).toFixed(2);

    default:
      throw new Error(`Unknown level: ${level}`);
  }
};

const calcTM = ({ projectType, level, costDrivers, size }) => {
  const { [coefficients.C]: c, [coefficients.D]: d } = cocomo[projectType][level];

  const pm = calcPM({ projectType, level, costDrivers, size });

  return (c * pm ** d).toFixed(2);
};

export { calcPM, calcTM };
