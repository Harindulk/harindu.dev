import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Grid,
} from '@mantine/core';
import harindu from './harindu.jpg';

const useStyles = createStyles((theme) => ({
  homeleft: {
    display: 'flex',
    paddingTop: theme.spacing.xl * 8,
    paddingBottom: theme.spacing.xl * 2,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingBottom: theme.spacing.xl * 0,
    },
  },

  homeright: {
    display: 'flex',
    paddingTop: theme.spacing.xl * 8,
    paddingBottom: theme.spacing.xl * 2,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingTop: theme.spacing.xl * 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Inconsolata, ${theme.fontFamily}`,
    fontSize: 39,
    lineHeight: 1.2,
    fontWeight: 800,

    // Media query with value from theme
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 32,
      fontFamily: `Inconsolata, ${theme.fontFamily}`,
    },

    // Static media query
    '@media (max-width: 425px)': {
      fontSize: 32,
    },
  },

  p: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 19,
    lineHeight: 1.2,
    letterSpacing: 0.9,

    // Media query with value from theme
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: 18,
      fontFamily: `Inconsolata, ${theme.fontFamily}`,
    },

    // Static media query
    '@media (max-width: 425px)': {
      fontSize: 17,
      letterSpacing: 0.4,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100px',
    width: '100px',
    pointerEvents: 'none',
    WebkitUserSelect: 'none',

    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      maxWidth: '100%',
    },
    '@media (max-width: 768px)': {
      maxWidth: '280px',
    },

    '@media (max-width: 500px)': {
      maxWidth: '60%',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export function HomeBanner() {
  const { classes } = useStyles();
  return (
    <div>
      <Container px={50}>
        <Grid align="flex-start">
          <Grid.Col xs={12} sm={8}>
            <div className={classes.homeleft}>
              <div>
                <Title mt={50} className={classes.title}>
                  Hi, I'm Harindu. <br /> I make games and apps.
                </Title>
                <Text mt={30} className={classes.p}>
                  I'm a 16 year old game developer & a student studying GCE O/l at Nalanda College
                  Colombo 10.
                </Text>
                <Text mt={20} className={classes.p}>
                  In my free time, I make games & Websites.
                </Text>
              </div>
            </div>
          </Grid.Col>

          <Grid.Col xs={12} sm={4}>
            <div className={classes.homeright}>
              <Image src={harindu.src} radius={350} className={classes.image} />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
