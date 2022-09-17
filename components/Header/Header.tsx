import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import Link from 'next/link';

const HEADER_HEIGHT = 70;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  var activenum = 0;
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const items = links.map((link) => (
    <Link href={link.link}>
      <a
        key={link.label}
        className={cx(classes.link, { [classes.linkActive]: active == link.link })}
        onClick={(event) => {
          setActive(link.link);
          close();
        }}
      >
        {link.label}
      </a>
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={100} className={classes.root}>
      <Container className={classes.header}>
        <Group spacing="xl">
          <Title order={2} weight={800} style={{ fontFamily: 'Poppins' }}>
            harindu.dev
          </Title>
          <div className={classes.burger}>
            <ColorSchemeToggle />
          </div>
        </Group>

        <Group spacing={5} className={classes.links}>
          {items}
          <ColorSchemeToggle />
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
