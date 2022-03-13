import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography, Button, Box } from '@mui/material';

import { models } from '../../constants';
import Accordion from '../Accordion';

const Start = () => {
  const { t } = useTranslation();

  const modelsTexts = t(`models`, { returnObjects: true });

  return (
    <>
      <Box sx={{ pb: 3 }}>
        <Typography variant="h5" component="div" gutterBottom>
          {t('section-titles.about')}
        </Typography>
        <Typography variant="body1" component="div">
          {t('about')}
        </Typography>
      </Box>

      <Typography variant="h5" component="div" gutterBottom>
        {t('section-titles.about-models')}
      </Typography>
      <Accordion
        id="cocomo-accordion"
        button={
          <Button component={RouterLink} to="/cocomo">
            {modelsTexts[models.COCOMO].title}
          </Button>
        }
      >
        <Typography sx={{ px: 2 }}>{modelsTexts[models.COCOMO].description}</Typography>
      </Accordion>

      <Accordion
        id="cocomo-2-accordion"
        button={
          <Button component={RouterLink} to="/cocomo-2">
            {modelsTexts[models.COCOMO_2].title}
          </Button>
        }
      >
        <Typography sx={{ px: 2 }}>{modelsTexts[models.COCOMO_2].description}</Typography>
      </Accordion>
    </>
  );
};

export default Start;
