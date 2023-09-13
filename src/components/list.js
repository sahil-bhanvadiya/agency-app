import React from 'react';
import { Flex, Box, IconButton } from 'theme-ui';

export default function List({ items = [], parentStyle, childStyle }) {
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        ...parentStyle,
      }}
    >
      {items.map(({ icon, text, isAvailable }, i) => (
        <Flex
          className={isAvailable ? 'open' : 'closed'}
          as="li"
          sx={{ ...childStyle }}
          key={i}
        >
          <IconButton sx={styles.listIcon} aria-label="list icon">
            {icon}
          </IconButton>
          {text}
        </Flex>
      ))}
    </Box>
  );
}

const styles = {
  listIcon: {
    width: ['25px', '35px'],
    height: 'auto',
    color: 'primary',
    padding: 0,
    fontSize: [3, 5],
    ml: '-1px',
    flexShrink: 0,
    justifyContent: 'flex-start',
    mt: '2px',
  },
};
