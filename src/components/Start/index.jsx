import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Button, Box  } from '@mui/material';

import { models } from '../../constants';

const Start = () => {
  const { t } = useTranslation();

  const modelsNames = t(`models`, { returnObjects: true });

  return (
    <>
      <Box sx={{ pb: 3 }}>

        <Typography variant="body1" component="div">
          {t('about')}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
        <Button component={RouterLink} to="/cocomo" variant="outlined">
          {modelsNames[models.COCOMO]}
        </Button>

        <Button component={RouterLink} to="/cocomo-2" variant="outlined">
          {modelsNames[models.COCOMO_2]}
        </Button>
      </Box>
    </>
  );
};

export default Start;
