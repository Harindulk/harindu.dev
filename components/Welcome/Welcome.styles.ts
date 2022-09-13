import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Inconsolata, ${theme.fontFamily}`,
    fontSize: 39,
    lineHeight: 1.2,
    fontWeight: 800,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 32,
    },
  },
}));
