import organic from './organic';
import semiDetached from './semiDetached';
import embedded from './embedded';
import projectTypes from '../../projectTypes';
import costDriversValues from './costDrivers';

const cocomo = {
  [projectTypes.ORGANIC]: organic,
  [projectTypes.EMBEDDED]: embedded,
  [projectTypes.SEMI_DETACHED]: semiDetached,
  ...costDriversValues,
};

export default cocomo;
