import { Typography, Accordion as MuiAccordion, AccordionSummary, AccordionDetails  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordion = ({id, summary, children, button, ...props}) => {
  return (
    <MuiAccordion {...props}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-content`}
          id={`${id}-hedaer`}
        >
          <Typography sx={{ flexShrink: 0 }}>
            {summary}
          </Typography>
          {button}
        </AccordionSummary>
        <AccordionDetails>
            {children}
        </AccordionDetails>
      </MuiAccordion>
  );
}

export default Accordion;
