import { Box, FormLabel } from '@mui/material';
import DescrTooltip from '../DescrTooltip';

const FieldTable = ({label, description, children, ...props}) => {
  return (
    <Box sx={{ my: 4 }}>
      <DescrTooltip title={description}>
        <FormLabel component="legend" sx={{ fontSize: 'h6.fontSize', mb: 2 }}>{label}</FormLabel>
      </DescrTooltip>
      {children}
    </Box>
  );
}

export default FieldTable;
