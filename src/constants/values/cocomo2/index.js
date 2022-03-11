import scaleFactorsValues from './scaleFactors';
import stages from '../../stages';
import earlyDesign from './earlyDesign';
import postArchitecture from './postArchitecture';

const cocomo2 = {
  [stages.EARLY_DESIGN]: earlyDesign,
  [stages.POST_ARCHITECTURE]: postArchitecture,
  ...scaleFactorsValues,
};

export default cocomo2;
