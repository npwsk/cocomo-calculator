import scaleFactorsValues from './scaleFactors';
import stages from '../../stages';
import earlyDesign from './earlyDesign';
import postArchitecture from './postArchitecture';
import coefficients from '../../coefficients';

const cocomo2 = {
  [stages.EARLY_DESIGN]: earlyDesign,
  [stages.POST_ARCHITECTURE]: postArchitecture,
  ...scaleFactorsValues,
  [coefficients.B]: 0.91,
  [coefficients.C]: 3.67,
  [coefficients.D]: 0.28,
};

export default cocomo2;
