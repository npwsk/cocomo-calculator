import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';

const Cocomo2 = () => {
  return (
    <div>
      Cocomo 2
      <Button component={RouterLink} to="/">
        Restart
      </Button>
    </div>
  );
};

export default Cocomo2;
