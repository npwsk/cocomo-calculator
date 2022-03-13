import stages from './stages';

const ratings = {
  EXTRA_LOW: 'EXTRA_LOW',
  VERY_LOW: 'VERY_LOW',
  LOW: 'LOW',
  NOMINAL: 'NOMINAL',
  HIGH: 'HIGH',
  VERY_HIGH: 'VERY_HIGH',
  EXTRA_HIGH: 'EXTRA_HIGH',
};

const cdRatings = [
  ratings.VERY_LOW,
  ratings.LOW,
  ratings.NOMINAL,
  ratings.HIGH,
  ratings.VERY_HIGH,
  ratings.EXTRA_HIGH,
];

const sfRatings = cdRatings;

const emRatings = {
  [stages.EARLY_DESIGN]: Object.values(ratings),
  [stages.POST_ARCHITECTURE]: cdRatings
};

export { cdRatings, sfRatings, emRatings };

export default ratings;
