import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';

const Cocomo = () => {
  return (
    <div>
      <Button component={RouterLink} to="/">
        Restart
      </Button>
    </div>
  );
};

export default Cocomo;
