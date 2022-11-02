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
import { useRouter } from 'next/router';
import Link from 'next/link';

const HEADER_HEIGHT = 70;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    marginBottom: theme.spacing.xl * 4,


    '@media (max-width: 768px)': {
      marginBottom: theme.spacing.xl * 2,
    },

    '@media (max-width: 500px)': {
      marginBottom: theme.spacing.xl * 3,
    },

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

  hide: {
    '@media (max-width: 309px)': {
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
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  title: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
    },
  },
}));



export function HeaderResponsive() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const router = useRouter();

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Group spacing="xl">
          <Title order={2} weight={800} className={classes.title}>
            harindu.dev
          </Title>
          <div className={classes.burger}>
            <div className={classes.hide}>
              <ColorSchemeToggle />
            </div>
          </div>
        </Group>

        <Group spacing={5} className={classes.links}>
          <Link href="/">
            <a
              key="Home"
              className={cx(classes.link, router.pathname == '/' ? classes.linkActive : '')}
              onClick={(event) => {
                close();
              }}
            >
              Home
            </a>
          </Link>

          <Link href="/about">
            <a
              key="About"
              className={cx(classes.link, router.pathname == '/about' ? classes.linkActive : '')}
              onClick={(event) => {
                close();
              }}
            >
              About
            </a>
          </Link>

          <Link href="/games">
            <a
              key="Games"
              className={cx(classes.link, router.pathname == '/games' ? classes.linkActive : '')}
              onClick={(event) => {
                close();
              }}
            >
              Games
            </a>
          </Link>

          {/* <Link href="/blog">
            <a
              key="Blog"
              className={cx(classes.link, router.pathname == '/blog' ? classes.linkActive : '')}
              onClick={(event) => {
                close();
              }}
            >
              Blog
            </a>
          </Link>

          <Link href="/social">
            <a
              key="Social"
              className={cx(classes.link, router.pathname == '/social' ? classes.linkActive : '')}
              onClick={(event) => {
                close();
              }}
            >
              Social
            </a>
          </Link> */}
          <ColorSchemeToggle />
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" aria-label="togglebutton" />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              <Link href="/">
                <a
                  key="Home"
                  className={cx(classes.link, router.pathname == '/' ? classes.linkActive : '')}
                  onClick={(event) => {
                    close();
                  }}
                >
                  Home
                </a>
              </Link>

              <Link href="/about">
                <a
                  key="About"
                  className={cx(
                    classes.link,
                    router.pathname == '/about' ? classes.linkActive : ''
                  )}
                  onClick={(event) => {
                    close();
                  }}
                >
                  About
                </a>
              </Link>

              <Link href="/games">
                <a
                  key="Games"
                  className={cx(
                    classes.link,
                    router.pathname == '/games' ? classes.linkActive : ''
                  )}
                  onClick={(event) => {
                    close();
                  }}
                >
                  Games
                </a>
              </Link>

              {/* <Link href="/blog">
                <a
                  key="Blog"
                  className={cx(classes.link, router.pathname == '/blog' ? classes.linkActive : '')}
                  onClick={(event) => {
                    close();
                  }}
                >
                  Blog
                </a>
              </Link>

              <Link href="/social">
                <a
                  key="Social"
                  className={cx(
                    classes.link,
                    router.pathname == '/social' ? classes.linkActive : ''
                  )}
                  onClick={(event) => {
                    close();
                  }}
                >
                  Social
                </a>
              </Link> */}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

export default HeaderResponsive;
