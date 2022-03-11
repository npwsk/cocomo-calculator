import coefficients from '../../coefficients';
import levels from '../../levels';

const basic = {
  [coefficients.A]: 2.4,
  [coefficients.B]: 1.05,
  [coefficients.C]: 2.5,
  [coefficients.D]: 0.38,
};

const intermediate = {
  [coefficients.A]: 3.2,
  [coefficients.B]: 1.05,
};

const organic = {
  [levels.BASIC]: basic,
  [levels.INTERMEDIATE]: intermediate,
};

export default organic;
