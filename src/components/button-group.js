
import { Box, Container, Flex } from 'theme-ui';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

export default function ButtonGroup({ next, previous }) {
  return (
    <Flex sx={{ width: '100%' }}>
      <Container>
        <Box sx={styles.buttonGroup} className="button__group">
          <button onClick={previous} aria-label="Previous">
            <IoIosArrowRoundBack />
          </button>
          <button onClick={next} aria-label="Next">
            <IoIosArrowRoundForward />
          </button>
        </Box>
      </Container>
    </Flex>
  );
}
const styles = {
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    mb: -4,
    button: {
      bg: 'transparent',
      border: '0px solid',
      fontSize: 40,
      cursor: 'pointer',
      px: '2px',
      color: '#BBC7D7',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'text',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
