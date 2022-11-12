import {
  createStyles,
  Container,
  Title,
  Text,
  Highlight,
} from '@mantine/core';
import { SocialMedia } from '../components/socialstats';
import Progress from '../components/timeline';
import Head from 'next/head';

const useStyles = createStyles((theme) => ({
  inner: {
    paddingBottom: theme.spacing.xl * 3,
  
    '@media (max-width: 500px)': {
      marginTop: theme.spacing.xl * 2,
    },
  },

  cover: {
    //disable right clicks and image dragging
    pointerEvents: 'none',
    WebkitUserSelect: 'none',
    marginTop: 120,
    objectFit: 'cover',
    top: 0,
    left: 0,
  },


  content: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    fontFamily: `Quicksand Bold, ${theme.fontFamily}`,
    color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.dark,
    fontSize: 35,
    lineHeight: 1.2,
    fontWeight: 800,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  buttonimage: {
    objectFit: 'fill',
  },

  button: {
    width: '300px',
    height: 80,
    maxWidth: 170,
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },

  paragraph: {
    fontFamily: `Quicksand`,
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark,
    fontSize: 17,
    lineHeight: 1.8,
    fontWeight: 500,
    
    [theme.fn.smallerThan('xs')]: {
      fontSize: 16,
      lineHeight: 1.6,
    },
  },

  //link
  link: {
    color: '#1d4ed8',
    fontWeight: 600,
    textDecoration: 'underline',
  },
}));

export function about() {
  const { classes } = useStyles();
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
          <Text className={classes.title} >
          Bio
            </Text>
            <Text mt="md" className={classes.paragraph}>
                Harindu Fonseka is an entrepreneur, game developer & web developer. he's mainly
                working in the video game development industry and he got verified on Google at the
                age of 15. Harindu's first startup company <a target="_blank" className={classes.link} href="https://starfun.studio/">starfun games</a> was started in 2020 as
                Harindulk Games and he changed its name to "starfun games" in august 2022. his first
                game "Ghost Zone" was released in 2021 march for Android and PC and he got some
                downloads for that game. his second game "Bug Star" was released in 2021 December.
                it got the attention of a live-streamer from Australia and she live-streamed it on
                Twitch. also, Harindu got his first Quicksandnship for 2 weeks at the age of 15. before
                Harindu turned age 16 he participated in over 28 Hackathons and got places in 22.
            </Text>
          </div>  
        </div>

        <Progress data={[]} />
        <SocialMedia data={[]} />
        <Container>
                <img src="https://res.cloudinary.com/harindu-dev/image/upload/v1668250240/enfj_ohg3xm.svg" className={classes.cover} />
            </Container>

      </Container>
    </div>
  );
}

export default about;
