import IconButton from '@mui/material/IconButton';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const ScrollToTopBtn = () => {
  return (
    <IconButton color="primary" aria-label="scroll to top" onClick={handleClick}>
      <ArrowCircleUpIcon />
    </IconButton>
  );
}

export default ScrollToTopBtn;
