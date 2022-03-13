import coefficients from '../../coefficients';
import levels from '../../levels';

const basic = {
  [coefficients.A]: 3,
  [coefficients.B]: 1.12,
  [coefficients.C]: 2.5,
  [coefficients.D]: 0.35,
};

const intermediate = {
  [coefficients.A]: 3,
  [coefficients.B]: 1.12,
};

const semiDetached = {
  [levels.BASIC]: basic,
  [levels.INTERMEDIATE]: intermediate,
};

export default semiDetached;
