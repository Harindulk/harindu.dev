import {
  createStyles,
  Image,
  Container,
  Title,
  Group,
  Text,
  UnstyledButton,
  Avatar,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import Link from 'next/link';
import googleplay from '../public/images/playstorebutton.png';
import appstore from '../public/images/appstorebutton.png';
import itchio from '../public/images/itchiodark.png';
import finalroom from '../public/images/the-final-room.jpg';
import microraly from '../public/images/micro-rally.jpg';
import bugstar from '../public/images/bug-star.jpg';
import ghostzone from '../public/images/ghost-zone.jpg';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: theme.spacing.xl * 3,
  },

  content: {
    maxWidth: 580,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 1000,

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
}));

export function about() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Micro Rally</Title>
            <Text mt="md">
              I'm Harindu Fonseka ( commonly known as harindulk ). I'm a Sri Lankan Game Developer,
              Web Developer and a Student. Verified on Google at 15 ( Sri Lanka's youngest google
              verified age ). When I was 11, I started doing simple projects with MicroBit. I began
              to learn Arduino when I was 12 years old and built over 30+ Arduino and NodeMcu
              projects and participated in many Robotics and invention competitions. When I was 13,
              I tried to learn HTML and CSS and built my first website with all skills that I knew.
              I also participated in Sri Lankan Robotics Challenge 2019 and scored 12th place in Sri
              Lanka. When I was 14, I played many games during the lockdown. One day I got an idea
              to try to make my own game (I got inspiration from danidev ). After learning a lot of
              stuff from youtube (especially from brackeys and blackthornprod ), I created my first
              game called ghost zone and published it on the google play store for mobile and on
              itch.io for windows. It's a 2D arcade runner game with pretty basic controls. And
              earned a small amount of money from displaying ads on mobile devices. In 2020
              September started my first company called "Harindulk Games." Overall I have experience
              with C#, Unity, Java, HTML, CSS, Javascript, Unity and python. And released one game
              on the play store and three on the itch.io store. Also completed over 30+ competitions
              and won over 12+.
            </Text>
          </div>

        </div>
      </Container>
    </div>
  );
}

export default about;
