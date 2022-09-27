import {
  createStyles,
  Image,
  Container,
  Title,
  Group,
  Text,
  UnstyledButton,
  Avatar,
  Highlight,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import Link from 'next/link';
import { SocialMedia } from '../components/SocialMedia/Socialstats';
import socialstatsdata from '../data/socialstats.json';
import Progress from '../components/Timeline/timeline';

const useStyles = createStyles((theme) => ({
  inner: {
    paddingBottom: theme.spacing.xl * 3,
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

  paragraph: {
    fontSize: 17,
    lineHeight: 1.8,
  },
}));

export function about() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title} order={3}>
              About
            </Title>
            <Text mt="md">
              <Highlight className={classes.paragraph} 
                highlight={[
                  'age of 15',
                  'age 16',
                  'starfun games',
                  'places in 22',
                  '28 hackathons',
                ]}
                highlightStyles={(theme) => ({
                  backgroundImage: theme.fn.linearGradient(
                    0,
                    theme.colors.blue[6],
                    theme.colors.blue[6]
                  ),
                  fontWeight: 700,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                })}
              >
                Harindu Fonseka is an entrepreneur, game developer & web developer. He's mainly
                working in the video game development industry and he got verified on google at the
                age of 15. Harindu's first startup company starfun games was started in 2020 as
                Harindulk Games and he changed its name to starfun games in august 2022. His Second
                Game "Bug Star" was released in 2021 December. it got the attention of a
                Live-streamer from Australia and she live-streamed it on Twitch. also, Harindu got
                his first internship for 2 Weeks at the age of 15. before Harindu turning age 16 He
                Participated in over 28 Hackathons and got places in 22.
              </Highlight>
              
            </Text>
          </div>
        </div>

        <Progress />
        <SocialMedia data={socialstatsdata.data} />
      </Container>
    </div>
  );
}

export default about;
