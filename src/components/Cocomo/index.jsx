import { Link as RouterLink } from 'react-router-dom';
import { Button, Paper, FormLabel, Box, Grid } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import { TextField } from 'formik-mui';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import projectTypes from '../../constants/projectTypes';
import costDrivers from '../../constants/costDrivers';
import ratings from '../../constants/ratings';
import FormikRadioGroup from './FormikRadioGroup';
import TableRadioGroup from './TableRadioGroup';
import { cdRatings } from '../../constants/ratings';
import { models } from '../../constants';
import levels from '../../constants/levels';
import costDriversValues from '../../constants/values/cocomo/costDrivers';
import DescrTooltip from '../DescrTooltip';

const validationSchema = Yup.object().shape({
  size: Yup.number().required('Please enter size').positive().integer('Must be positive integer'),
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

  const onSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
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
    <Paper sx={{ py: 4, px: 4 }}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
          isSubmitting,
        }) => (
          <Form>
            <FormLabel component="legend" sx={{ mb: 3, fontSize: 'h4.fontSize' }}>
              {t(`models.${models.COCOMO}`)}
            </FormLabel>

            <Grid container spacing={2}>
              <Grid item xs="auto">
                <Field
                  name="size"
                  component={TextField}
                  label={`${t('size.title')}:`}
                  aria-labelledby="size"
                />
              </Grid>
              <Grid item xs="auto"  sx={{display: 'flex', alignItems: 'center'}}>
                <FormLabel id="size">{t('size.units')}</FormLabel>
              </Grid>
            </Grid>

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

            {values.level === levels.INTERMEDIATE && (
              <Box>
                {Object.keys(costDrivers).map((cd, i) => (
                  <Field
                    key={cd}
                    name={`costDrivers.${cd}`}
                    label={t(`cost-drivers.${cd}`)}
                    tprefix="ratings"
                    options={cdRatings}
                    component={TableRadioGroup}
                    labelOptions={i === 0}
                    coefsData={costDriversValues[cd]}
                    row
                  />
                ))}
              </Box>
            )}

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
