import { useTranslation } from 'react-i18next';
import { Form, Field } from 'formik';
import { FormLabel, Box, Grid, Divider } from '@mui/material';
import { TextField } from 'formik-mui';
import Result from '../Result/index';
import ScrollToTopBtn from '../ScrollToTopBtn/index';

const CalcForm = ({ result, title, children, isSubmitting, handleChange, ...props }) => {
  const { t } = useTranslation();
  return (
    <Form onChange={handleChange}>
      <FormLabel component="legend" sx={{ mb: 0, fontSize: 'h4.fontSize' }}>
        {title}
      </FormLabel>

      <Divider variant="midddle" />

      <Result {...result} />

      <Grid container spacing={2}>
        <Grid item xs="auto">
          <Field name="size" component={TextField} label={t('size.title')} aria-labelledby="size" />
        </Grid>
        <Grid item xs="auto" sx={{ display: 'flex', alignItems: 'center' }}>
          <FormLabel id="size">{t('size.units')}</FormLabel>
        </Grid>
      </Grid>

      {children}

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <ScrollToTopBtn />
      </Box>
    </Form>
  );
};

export default CalcForm;
