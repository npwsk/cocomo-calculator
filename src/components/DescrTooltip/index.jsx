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

const DescrTooltip = ({ text, children, ...props}) => {
  return (
    <StyledTooltip arrow title={text} {...props} placement="right-start">
        {children}
      </StyledTooltip>
  );
}

export default DescrTooltip;
