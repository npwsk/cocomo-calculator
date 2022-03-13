import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 400,
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}));

const DescrTooltip = ({ title, children, ...props}) => {
  return (
    <StyledTooltip arrow title={title} placement="right" {...props}>
        {children}
      </StyledTooltip>
  );
}

export default DescrTooltip;
