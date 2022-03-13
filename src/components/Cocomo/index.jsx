import { Formik, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { useState } from 'react';

import CalcForm from '../CalcForm';
import TableRadioGroup from '../TableRadioGroup';
import FormikRadioGroup from '../FormikRadioGroup';

import { models, ratings, costDrivers, projectTypes, cdRatings, levels } from '../../constants';
import costDriversValues from '../../constants/values/cocomo/costDrivers';
import { calcPM, calcTM } from '../../utils/calc/cocomo';
import changeProp from '../../utils/changeProp';

const validationSchema = Yup.object().shape({
  size: Yup.number('Must be a number')
    .required('Please enter size')
    .positive('Must be positive')
    .integer('Must be integer'),
  projectType: Yup.string().required('Please choose a project type'),
  level: Yup.string().required('Please choose a level'),
  costDrivers: Yup.object().shape(
    Object.keys(costDrivers).reduce((obj, cd) => {
      return { ...obj, [cd]: Yup.string().required('Please choose a value') };
    }, {})
  ),
});

const Cocomo = () => {
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
    projectType: projectTypes.ORGANIC,
    level: levels.BASIC,
    costDrivers: Object.keys(costDrivers).reduce(
      (obj, cd) => ({
        ...obj,
        [cd]: ratings.NOMINAL,
      }),
      {}
    ),
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ values, isSubmitting }) => (
        <CalcForm
          title={t(`models.${models.COCOMO}.title`)}
          result={result}
          isSubmitting={isSubmitting}
          handleChange={(e) => onChange(e, values)}
        >
          <Field
            name="projectType"
            label={t('project-types.title')}
            options={Object.values(projectTypes)}
            tprefix="project-types"
            component={FormikRadioGroup}
            row
          />

          <Field
            name="level"
            label={t('levels.title')}
            options={Object.values(levels)}
            tprefix="levels"
            component={FormikRadioGroup}
            row
          />

          {values.level === levels.INTERMEDIATE &&
            Object.keys(costDrivers).map((cd, i) => (
              <Field
                key={cd}
                name={`costDrivers.${cd}`}
                label={t(`cost-drivers.${cd}.title`)}
                description={t(`cost-drivers.${cd}.description`)}
                tprefix="ratings"
                options={cdRatings}
                component={TableRadioGroup}
                labelOptions={i === 0}
                coefsData={costDriversValues[cd]}
                row
              />
            ))}
        </CalcForm>
      )}
    </Formik>
  );
};

export default Cocomo;
