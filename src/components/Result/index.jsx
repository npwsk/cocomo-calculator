import { Tooltip, Divider, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Result = ({ pm, tm, ...props }) => {
  const { t } = useTranslation();
  const pmText = t('pm', { returnObjects: true });
  const tmText = t('tm', { returnObjects: true });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        justifyContent: 'center',
        gap: 4,
        width: {
          sx: 200,
          md: 400,
        },
        mx: 'auto',
        my: 5
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box>
          <Tooltip title={pmText.description} arrow>
            <Typography variant="h6" component="div" align="center">
              {pmText.title}
            </Typography>
          </Tooltip>
        </Box>
        <Divider variant="midddle" />
        <Box>
          <Typography variant="h5" component="div" align="center">
            {pm}
          </Typography>
          <Typography variant="caption" component="div" align="center">
            {pmText.units}
          </Typography>
        </Box>
      </Box>

      <Box>
        <Divider orientation="vertical" variant="middle" />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box>
          <Tooltip title={tmText.description} arrow>
            <Typography variant="h6" component="div" align="center">
              {tmText.title}
            </Typography>
          </Tooltip>
        </Box>
        <Divider variant="midddle" />
        <Box>
          <Typography variant="h5" component="div" align="center">
            {tm}
          </Typography>
          <Typography variant="caption" component="div" align="center">
            {tmText.units}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Result;
