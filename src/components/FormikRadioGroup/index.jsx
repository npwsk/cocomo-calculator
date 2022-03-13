import { Radio, RadioGroup, FormControlLabel, FormLabel, Box, FormControl } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DescrTooltip from '../DescrTooltip';

const renderOptions = (options, optionText) => {
  return options.map((option) => (
    <DescrTooltip key={option} title={optionText[option].description}>
      <FormControlLabel value={option} control={<Radio />} label={optionText[option].title} />
    </DescrTooltip>
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
  const optionText = t(tprefix, { returnObjects: true });

  return (
    <Box sx={{ py: 2 }}>
      <FormControl component="fieldset" variant="filled">
        <FormLabel id={id}>{label}</FormLabel>

        <RadioGroup {...field} {...props} name={fieldName} aria-labelledby={id}>
          {options ? renderOptions(options, optionText) : children}
        </RadioGroup>
        {touched[fieldName] && errors[fieldName] && (
          <span style={{ color: 'red', fontFamily: 'sans-serif' }}>{errors[fieldName]}</span>
        )}
      </FormControl>
    </Box>
  );
};

export default FormikRadioGroup;
