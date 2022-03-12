import { Radio, RadioGroup, FormControlLabel, FormLabel, Box, FormControl } from '@mui/material';
import { useTranslation } from 'react-i18next';

const renderOptions = (options, labelText) => {
  return options.map((option) => (
    <FormControlLabel key={option} value={option} control={<Radio />} label={labelText[option].title} />
  ));
};

const FormikRadioGroup = ({
  field,
  form: { touched, errors },
  name,
  id,
  label,
  options,
  children,
  tprefix,
  ...props
}) => {
  const fieldName = name || field.name;
  const { t } = useTranslation();
  const labelText = t(tprefix, { returnObjects: true });

  return (
    <Box sx={{ py: 2 }}>
      <FormControl component="fieldset" variant="filled">
        <FormLabel id={id}>{label}</FormLabel>

        <RadioGroup {...field} {...props} name={fieldName} aria-labelledby={id}>
          {options ? renderOptions(options, labelText) : children}
        </RadioGroup>
        {touched[fieldName] && errors[fieldName] && (
          <span style={{ color: 'red', fontFamily: 'sans-serif' }}>{errors[fieldName]}</span>
        )}
      </FormControl>
    </Box>
  );
};

export default FormikRadioGroup;
