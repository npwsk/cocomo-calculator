import { Radio, RadioGroup, FormLabel, Box, FormControl } from '@mui/material';
import { useTranslation } from 'react-i18next';

import DescrTooltip from '../DescrTooltip';

const renderOptions = (options, labelText, coefsData) => {
  return options.map((option) => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        width: '80px',
      }}
      key={option}
    >
      <DescrTooltip title={labelText[option]} placement="top">
        <Radio value={option} disabled={coefsData[option] === null} />
      </DescrTooltip>
    </Box>
  ));
};

const TableRadioGroup = ({
  field,
  form: { touched, errors },
  name,
  id,
  label,
  description,
  options,
  children,
  coefsData,
  key,
  ...props
}) => {
  const fieldName = name || field.name;

  const { t } = useTranslation();
  const labelText = t('ratings', { returnObjects: true });

  return (
    <Box sx={{ borderBottom: '1px solid lightgray', '&:last-child': { borderBottom: 'none' }, my: 2 }}>
      <FormControl
        component="fieldset"
        variant="filled"
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
          },
          alignItems: {
            lg: 'center',
          },
        }}
      >
        <DescrTooltip title={description} placement="bottom">
          <FormLabel
            id={id}
            sx={{
              flexGrow: 1,
              pl: 1,
            }}
          >
            {label}
          </FormLabel>
        </DescrTooltip>

        <RadioGroup {...field} {...props} name={fieldName} aria-labelledby={id}>
          {options ? renderOptions(options, labelText, coefsData) : children}
        </RadioGroup>
        {touched[fieldName] && errors[fieldName] && (
          <span style={{ color: 'red', fontFamily: 'sans-serif' }}>{errors[fieldName]}</span>
        )}
      </FormControl>
    </Box>
  );
};

export default TableRadioGroup;
