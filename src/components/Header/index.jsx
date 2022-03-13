import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Typography, Box, AppBar, Toolbar, Button } from '@mui/material';
import models from '../../constants/models';

const Header = () => {
  const { t } = useTranslation();

  const pages = [
    {
      key: models.COCOMO,
      title: t(`models.${models.COCOMO}.title`),
      to: '/cocomo',
    },
    {
      key: models.COCOMO_2,
      title: t(`models.${models.COCOMO_2}.title`),
      to: '/cocomo-2',
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static" sx={{ px: 2 }}>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', sm: 'row' },
            my: { xs: 0, sm: 1 }
          }}
        >
          <Button component={RouterLink} to="/" sx={{ color: 'white', display: 'block' }}>
            <Typography variant="h6" noWrap>
              {t('app-title')}
            </Typography>
          </Button>

          <Box sx={{ display: 'flex' }}>
            {pages.map((page) => (
              <Button
                component={RouterLink}
                to={page.to}
                key={page.title}
                sx={{ color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
