import {
  createStyles,
  Image,
  Avatar,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  Grid,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import image from './harindu.png';

const useStyles = createStyles((theme) => ({
  homeleft: {
    display: 'flex',
    paddingTop: theme.spacing.xl * 8,
    paddingBottom: theme.spacing.xl * 2,
  },
  homeright: {
    display: 'flex',
    paddingTop: theme.spacing.xl * 8,
    paddingBottom: theme.spacing.xl * 2,
  },

  content: {
    maxWidth: 600,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Inconsolata, ${theme.fontFamily}`,
    fontSize: 39,
    lineHeight: 1.3,
    fontWeight: 800,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 32,
    },
  },

  p: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 18,
    lineHeight: 1.2,
    letterSpacing: 0.9,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 16,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    alignItems: 'right',

    [theme.fn.smallerThan('md')]: {
      alignContent: 'top',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <Grid>
          <Grid.Col span={8} lg={8} sm={12}>
          <div className={classes.homeleft}>
            <div className={classes.content}>
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


          <Grid.Col span={4} lg={4} sm={6}>
            <div className={classes.homeright}>
              <Image src={image.src} className={classes.image} />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
