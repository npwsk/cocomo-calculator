import { Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

const Start = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ pb: 3 }}>
        <Typography variant="h3" gutterBottom component="div">
          Welcome
        </Typography>
        <Typography variant="body1" component="div">
          About the app and each model
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button component={RouterLink} to="/cocomo">
          COCOMO
        </Button>

        <Button component={RouterLink} to="/cocomo-2">
          COCOMO II
        </Button>
      </Box>
    </Container>
  );
};

export default Start;
