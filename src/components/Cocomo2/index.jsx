import { Formik, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { useState } from 'react';

import CalcForm from '../CalcForm';
import TableRadioGroup from '../TableRadioGroup';
import FormikRadioGroup from '../FormikRadioGroup';
import FieldTable from '../FieldsTable';

import {
  models,
  ratings,
  costDrivers,
  stages,
  scaleFactors,
  sfRatings,
  emRatings,
  effortMultipliers,
} from '../../constants';
import scaleFactorsValues from '../../constants/values/cocomo2/scaleFactors';
import cocomo2 from '../../constants/values/cocomo2';
import { calcPM, calcTM } from '../../utils/calc/cocomo2';
import changeProp from '../../utils/changeProp';

const validationSchema = Yup.object().shape({
  size: Yup.number('Must be a number')
    .required('Please enter size')
    .positive('Must be positive')
    .integer('Must be integer'),
  stage: Yup.string().required('Please choose a stage'),
  level: Yup.string().required('Please choose a level'),
  costDrivers: Yup.object().shape(
    Object.keys(costDrivers).reduce((obj, cd) => {
      return { ...obj, [cd]: Yup.string().required('Please choose a value') };
    }, {})
  ),
});

const Cocomo2 = () => {
  const { t } = useTranslation();

  const [result, setResult] = useState({
    pm: 0,
    tm: 0,
  });

  const onChange = (e, prevValues) => {
    const values = changeProp(prevValues, e.target.value, e.target.name);

    const pm = calcPM(values);
    const tm = calcTM(values);

    setResult({ pm, tm });
  };

  const initialValues = {
    size: '',
    stage: stages.EARLY_DESIGN,
    scaleFactors: Object.keys(scaleFactors).reduce(
      (obj, sf) => ({
        ...obj,
        [sf]: ratings.NOMINAL,
      }),
      {}
    ),
    effortMultipliers: {
      [stages.EARLY_DESIGN]: Object.keys(effortMultipliers[stages.EARLY_DESIGN]).reduce(
        (obj, em) => ({
          ...obj,
          [em]: ratings.NOMINAL,
        }),
        {}
      ),
      [stages.POST_ARCHITECTURE]: Object.keys(effortMultipliers[stages.POST_ARCHITECTURE]).reduce(
        (obj, em) => ({
          ...obj,
          [em]: ratings.NOMINAL,
        }),
        {}
      ),
    },
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ values, isSubmitting }) => (
        <CalcForm
          title={t(`models.${models.COCOMO_2}.title`)}
          result={result}
          isSubmitting={isSubmitting}
          handleChange={(e) => onChange(e, values)}
        >
          <Field
            name="stage"
            label={t('stages.title')}
            options={Object.values(stages)}
            tprefix="stages"
            component={FormikRadioGroup}
            row
          />

          <FieldTable label={t('scale-factors.title')} description="">
            {Object.keys(scaleFactors).map((sf) => (
              <Field
                key={sf}
                name={`scaleFactors.${sf}`}
                label={t(`scale-factors.${sf}.title`)}
                description={t(`scale-factors.${sf}.description`)}
                options={sfRatings}
                component={TableRadioGroup}
                coefsData={scaleFactorsValues[sf]}
                row
              />
            ))}
          </FieldTable>

          <FieldTable label={t('effort-multipliers.title')} description="">
            {Object.keys(effortMultipliers[values.stage]).map((em) => (
              <Field
                key={em}
                name={`effortMultipliers.${values.stage}.${em}`}
                label={t(`effort-multipliers.${values.stage}.${em}.title`)}
                description={t(`effort-multipliers.${values.stage}.${em}.description`)}
                options={emRatings[values.stage]}
                component={TableRadioGroup}
                coefsData={cocomo2[values.stage]}
                row
              />
            ))}
          </FieldTable>
        </CalcForm>
      )}
    </Formik>
  );
};

export default Cocomo2;
