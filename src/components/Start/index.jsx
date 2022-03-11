import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Button, Box } from '@mui/material';

import { models } from '../../constants';

const Start = () => {
  const { t } = useTranslation();

  const modelsNames = t(`models`, { returnObjects: true });

  return (
    <>
      <Box sx={{ pb: 3 }}>
        <Typography variant="h3" gutterBottom component="div">
          {t('app-title')}
        </Typography>
        <Typography variant="body1" component="div">
          {t('about')}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button component={RouterLink} to="/cocomo">
          {modelsNames[models.COCOMO]}
        </Button>

        <Button component={RouterLink} to="/cocomo-2">
          {modelsNames[models.COCOMO_2]}
        </Button>
      </Box>
    </>
  );
};

export default Start;
