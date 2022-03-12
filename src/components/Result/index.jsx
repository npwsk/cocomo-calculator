import {
  Tooltip,
  Card,
  CardContent,
  Divider,
  Typography,
  Grid,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const Result = ({ pm, tm, ...props }) => {
  const { t } = useTranslation();
  const pmText = t('pm', { returnObjects: true });
  const tmText = t('tm', { returnObjects: true });

  return (
    <Card sx={{ width: 500, mx: 'auto' }}>
      <CardContent>
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={5}>
            <Tooltip title={pmText.description} arrow>
              <Typography variant="h6" component="div" align="center">
                {pmText.title}
              </Typography>
            </Tooltip>
          </Grid>
          <Grid item xs={2}>
            <Divider orientation="vertical" variant="middle" />
          </Grid>
          <Grid item xs={5}>
            <Tooltip title={tmText.description} arrow>
              <Typography variant="h6" component="div" align="center">
                {tmText.title}
              </Typography>
            </Tooltip>
          </Grid>

          <Grid item xs={12}>
            <Divider variant="midddle" />
          </Grid>

          <Grid item xs={5}>
            <Typography variant="h5" component="div" align="center">
              {pm}
            </Typography>
            <Typography variant="caption" component='div' align="center">{pmText.units}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Divider orientation="vertical" variant="middle" />
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h5" component="div" align="center">
              {tm}
            </Typography>
            <Typography variant="caption" component='div' align="center">{tmText.units}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Result;
