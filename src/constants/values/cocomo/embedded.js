import coefficients from '../../coefficients';
import levels from '../../levels';

const basic = {
  [coefficients.A]: 3.6,
  [coefficients.B]: 1.2,
  [coefficients.C]: 2.5,
  [coefficients.D]: 0.32,
};

const intermediate = {
  [coefficients.A]: 2.8,
  [coefficients.B]: 1.2,
};

const embedded = {
  [levels.BASIC]: basic,
  [levels.INTERMEDIATE]: intermediate,
};

export default embedded;
