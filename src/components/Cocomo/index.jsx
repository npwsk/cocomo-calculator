import { Link as RouterLink } from 'react-router-dom';
import { Button, TextField, Paper, FormGroup, FormLabel, FormControlLabel } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import projectTypes from '../../constants/projectTypes';
import costDrivers from '../../constants/costDrivers';
import ratings from '../../constants/ratings';
import FormikRadioGroup from '../FormikRadioGroup';
import { cdRatings } from '../../constants/ratings';
import { models } from '../../constants';

const validationSchema = Yup.object().shape({
  size: Yup.number().required('Please enter size').positive().integer('Must be positive integer'),
  projectType: Yup.string().required('Please choose a project type'),
});

const Cocomo = () => {
  const { t } = useTranslation();

  const onSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    size: '',
    projectType: projectTypes.ORGANIC,
    costDrivers: Object.keys(costDrivers).reduce((obj, cd) => ({
      ...obj,
      [cd]: ratings.NOMINAL,
    })),
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ isSubmitting, touched, values }) => (
          <Form>
            <FormLabel component="legend" sx={{ mb: 3, fontSize: 'h4.fontSize' }}>
              {t(`models.${models.COCOMO}`)}
            </FormLabel>

            <FormControlLabel
              control={<Field name="size" component={TextField} sx={{ pl: 3 }} />}
              label={`${t('size')}:`}
              labelPlacement="start"
            />

            <Field
              name="projectType"
              label={t('project-type')}
              options={Object.values(projectTypes)}
              component={FormikRadioGroup}
              row
            />
            <FormGroup>
              {Object.keys(costDrivers).map((cd) => (
                <Field
                  key={cd}
                  name={cd}
                  id={cd}
                  label={t(`cost-drivers.${cd}`)}
                  options={cdRatings}
                  component={FormikRadioGroup}
                  row
                />
              ))}
            </FormGroup>

            <Button disabled={isSubmitting} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
      <Button component={RouterLink} to="/">
        Restart
      </Button>
    </Paper>
  );
};

export default Cocomo;
