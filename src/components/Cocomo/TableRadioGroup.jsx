import { Radio, RadioGroup, FormLabel, Box, FormControl } from '@mui/material';
import { useTranslation } from 'react-i18next';

const renderOptions = (options, labelText, labelOptions, coefsData) => {
  return options.map((option) => (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '90px', textAlign: 'center'}} key={option}>
      {labelOptions && <FormLabel disabled >{labelText[option]}</FormLabel>}
      <Radio value={option} disabled={!coefsData[option]} />
    </Box>
  ));
};

const TableRadioGroup = ({
  field,
  form: { touched, errors },
  name,
  id,
  label,
  options,
  children,
  tprefix,
  labelOptions,
  coefsData,
  ...props
}) => {
  const fieldName = name || field.name;

  const { t } = useTranslation();
  const labelText = t(tprefix, { returnObjects: true });

  return (
    <Box >
      <FormControl
        component="fieldset"
        variant="filled"
        sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: '1px solid lightgray' }}
      >
        <FormLabel id={id} sx={{ flexBasis: '240px', alignSelf: labelOptions ? 'flex-end' : 'auto', pb: labelOptions ? 1 : 0 }}>
          {label}
        </FormLabel>

        <RadioGroup {...field} {...props} name={fieldName} aria-labelledby={id}>
          {options ? renderOptions(options, labelText, labelOptions, coefsData) : children}
        </RadioGroup>
        {touched[fieldName] && errors[fieldName] && (
          <span style={{ color: 'red', fontFamily: 'sans-serif' }}>{errors[fieldName]}</span>
        )}
      </FormControl>
    </Box>
  );
};

export default TableRadioGroup;
