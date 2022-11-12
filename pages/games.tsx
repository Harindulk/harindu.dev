import {
  createStyles,
  Image,
  Container,
  Group,
  Text,
  UnstyledButton,
  Tooltip,
  Space,
} from '@mantine/core';
import googleplay from '../public/images/playstorebutton.png';
import appstore from '../public/images/appstorebutton.png';
import itchio from '../public/images/itchiodark.png';
import finalroom from '../public/images/the-final-room.jpg';
import microraly from '../public/images/micro-rally.jpg';
import bugstar from '../public/images/bug-star.jpg';
import ghostzone from '../public/images/ghost-zone.jpg';
import epicgames from '../public/images/icons/EpicLogo_150.png';
import steam from '../public/images/icons/SteamLogo_150.png';
import gog from '../public/images/icons/GOGLogo_150.png';
import gamesdata from '../data/games.json';
import Head from 'next/head';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: theme.spacing.xl * 3,
  },

  content: {
    maxWidth: 400,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100',
      marginRight: 0,
    },
  },

  contentmobile: {
    maxWidth: 600,
    [theme.fn.smallerThan(425)]: {
      maxWidth: '100%',
    },
  },

  title: {
    fontFamily: `Quicksand Bold, ${theme.fontFamily}`,
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
    fontSize: 46,
    fontWeight: 800,
    [theme.fn.smallerThan('xs')]: {
      fontSize: 35,
    },
  },

  gamestatus: {
    fontFamily: `Quicksand Bold, ${theme.fontFamily}`,
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
    fontSize: 23,
    fontWeight: 700,
    [theme.fn.smallerThan('xs')]: {
      fontSize: 20,
    },
  },

  p: {
    fontSize: 16,
    fontWeight: 400,
    [theme.fn.smallerThan('xs')]: {
      fontSize: 16,
    },
  },

  margin: {
    marginTop: 120,
  },

  buttonimage: {
    objectFit: 'fill',
  },

  button: {
    width: '300px',
    height: 80,
    maxWidth: 170,

    [theme.fn.smallerThan(407)]: {
      width: '150px',
      height: 60,
      maxWidth: 150,
    },

    [theme.fn.smallerThan(365)]: {
      width: '135px',
      height: 50,
      maxWidth: 125,
    },

    [theme.fn.smallerThan(300)]: {
      width: '100px',
      height: 40,
      maxWidth: 100,
    },
  },

  buttonicon: {
    width: '50px',
    maxWidth: 170,
  },

  hideonmobile: {
    [theme.fn.smallerThan(991)]: {
      display: 'none',
    },
  },

  hideondesktop: {
    [theme.fn.largerThan(991)]: {
      display: 'none',
    },
  },

  image: {
    maxWidth: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.fn.smallerThan(425)]: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
}));

export function games() {
  const { classes } = useStyles();
  const elements = gamesdata.games;

  return (
    <div>
      <Head>
        <title>Games</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Space h="xl" />
      <Container>
        <div className={classes.hideonmobile}>
          <div className={classes.inner}>
            <Image
              src="https://res.cloudinary.com/starfun-games/image/upload/v1665115444/micro_rally.jpg"
              width="450px"
              height="450px"
              radius="md"
              alt="micro rally"
            />
            <div className={classes.content}>
              <Text className={classes.title}>Micro Rally</Text>
              <Text className={classes.p} mt="md" >
                Face the challenges of unique theme maps with many colorful cars. Gain bonuses 🚗.
                from daring tricks and collect coins to get maps and by leveling up you can reach
                even 😎. greater distances with a small fuel capacity⛽.
              </Text>
              <Text mt={20} className={classes.gamestatus}>
                Coming soon
              </Text>

              <Group>
                <Tooltip label="Google Play Store" color="dark" position="bottom" withArrow>
                  <UnstyledButton aria-label="google play button" className={classes.button}>
                    <Image
                      alt="play store button image"
                      src={googleplay.src}
                      className={classes.buttonimage}
                      width="170"
                      height="51"
                    />
                  </UnstyledButton>
                </Tooltip>

                <Tooltip label="Apple App Store" color="dark" position="bottom" withArrow>
                  <UnstyledButton aria-label="app store button" className={classes.button}>
                    <Image
                      alt="app store button image"
                      src={appstore.src}
                      className={classes.buttonimage}
                      width="170"
                      height="51"
                    />
                  </UnstyledButton>
                </Tooltip>
              </Group>
            </div>
          </div>

          <div className={classes.inner}>
            <div className={classes.content}>
              <Text className={classes.title}>The Final Room</Text>
              <Text className={classes.p} mt="md">
                the final room is a First person psychological thriller game and we are hoping to
                release it in 2023 Q4
              </Text>
              <Text mt={20} className={classes.gamestatus}>
                Coming Soon
              </Text>
              <Group mt="md">
                <Tooltip label="Steam" color="dark" position="bottom" withArrow>
                  <UnstyledButton aria-label="steam button" className={classes.buttonicon}>
                    <Image width="50" height="50" alt="steam button image" src={steam.src} />
                  </UnstyledButton>
                </Tooltip>

                <Tooltip label="Epic Games" color="dark" position="bottom" withArrow>
                  <UnstyledButton aria-label="epic games button" className={classes.buttonicon}>
                    <Image width="50" height="50" alt="epic game button image" src={epicgames.src} />
                  </UnstyledButton>
                </Tooltip>
                <Tooltip label="gog.com" color="dark" position="bottom" withArrow>
                  <UnstyledButton aria-label="gog.com button" className={classes.buttonicon}>
                    <Image width="50" height="50" alt="gog.com button image" src={gog.src} />
                  </UnstyledButton>
                </Tooltip>
              </Group>
            </div>
            <Image
              src="https://res.cloudinary.com/starfun-games/image/upload/v1665115445/the_final_room.jpg"
              width="450px"
              height="450px"
              radius="md"
              alt="The Final Room"
            />
          </div>

          <div className={classes.inner}>
            <Image
              src="https://res.cloudinary.com/starfun-games/image/upload/v1665115444/bug_star.jpg"
              width="450px"
              height="450px"
              radius="md"
              alt="bug star"
            />
            <div className={classes.content}>
              <Text className={classes.title}>Bug Star</Text>
              <Text className={classes.p} mt="md">
                "Bug Star" is a game based on bugs, which means you need to find the bugs that I
                intentionally added to the game & you need to use them to complete the levels.
              </Text>
              <Text mt={20} className={classes.gamestatus}>
                Available Now
              </Text>
              <Group>
                <Tooltip label="itch.io" color="dark" position="bottom" withArrow>
                  <UnstyledButton aria-label="itch.io button" className={classes.button}>
                    <a target="_blank" href="https://harindulk.itch.io/bug-star">
                      <Image
                        alt="itch.io button image"
                        src={itchio.src}
                        className={classes.buttonimage}
                        width="170"
                        height="51"
                      />
                    </a>
                  </UnstyledButton>
                </Tooltip>
              </Group>
            </div>
          </div>

          <div className={classes.inner}>
            <div className={classes.content}>
              <Text className={classes.title}>Ghost Zone</Text>
              <Text className={classes.p} mt="md">
                Ghost zone is a small 2D game where you need to run fast and pass the incoming
                ghosts.
              </Text>
              <Text mt={20} className={classes.gamestatus}>
                Available Now
              </Text>
              <Group>
                <Tooltip label="Google Play Store" color="dark" position="bottom" withArrow>
                  <UnstyledButton aria-label="play store button" className={classes.button}>
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.Harindulk.Ghostzone"
                    >
                      <Image
                        alt="play store button image"
                        src={googleplay.src}
                        className={classes.buttonimage}
                        width="170"
                        height="51"
                      />
                    </a>
                  </UnstyledButton>
                </Tooltip>

                <Tooltip label="itch.io" color="dark" position="bottom" withArrow>
                  <UnstyledButton aria-label="itch.io button" className={classes.button}>
                    <a target="_blank" href="https://harindulk.itch.io/ghost-zone">
                      <Image
                        alt="itch.io button image"
                        src={itchio.src}
                        className={classes.buttonimage}
                        width="170"
                        height="51"
                      />
                    </a>
                  </UnstyledButton>
                </Tooltip>
              </Group>
            </div>
            <Image
              src="https://res.cloudinary.com/starfun-games/image/upload/v1665115444/ghost_zone.jpg"
              width="450px"
              height="450px"
              radius="md"
              alt="Ghost Zone"
            />
          </div>
        </div>

        <div className={classes.hideondesktop}>
          <Image
            src="https://res.cloudinary.com/starfun-games/image/upload/v1665115444/micro_rally.jpg"
            className={classes.image}
            radius="md"
            alt="micro rally"
            width="500"
            height="500"
          />
          <Space h="xl" />
          <div className={classes.inner}>
            <div className={classes.contentmobile}>
              <Text className={classes.title}>Micro Rally</Text>
              <Text className={classes.p} mt="md">
                Face the challenges of unique theme maps with many colorful cars. Gain bonuses 🚗.
                from daring tricks and collect coins to get maps and by leveling up you can reach
                even 😎. greater distances with a small fuel capacity⛽.
              </Text>
              <Text mt={20} className={classes.gamestatus}>
                coming soon
              </Text>

              <Group>
                <UnstyledButton aria-label="google play button" className={classes.button}>
                  <Image
                    alt="play store button image"
                    src={googleplay.src}
                    className={classes.buttonimage}
                    width="170"
                    height="51"
                  />
                </UnstyledButton>

                <UnstyledButton aria-label="app store button" className={classes.button}>
                  <Image
                    alt="app store button image"
                    src={appstore.src}
                    className={classes.buttonimage}
                    width="170"
                    height="51"
                  />
                </UnstyledButton>
              </Group>
              <Space h="xl" />
            </div>
          </div>

          <Image
            src="
          https://res.cloudinary.com/starfun-games/image/upload/v1665115445/the_final_room.jpg"
            radius="md"
            className={classes.image}
            alt="the final room"
            width="500"
            height="500"
          />
          <Space h="xl" />
          <div className={classes.inner}>
            <div className={classes.contentmobile}>
              <Text className={classes.title}>The Final Room</Text>
              <Text className={classes.p} mt="md">
                the final room is a First person psychological thriller game and we are hoping to
                release it in 2023 Q4
              </Text>
              <Text mt={20} className={classes.gamestatus}>
                Coming Soon
              </Text>
              <Group mt="md">
                <UnstyledButton aria-label="steam button" className={classes.buttonicon}>
                  <Image width="50" height="50" alt="steam button image" src={steam.src} />
                </UnstyledButton>

                <UnstyledButton aria-label="epic games button" className={classes.buttonicon}>
                  <Image width="50" height="50" alt="epic games button image" src={epicgames.src} />
                </UnstyledButton>
                <UnstyledButton aria-label="gog.com button" className={classes.buttonicon}>
                  <Image width="50" height="50" alt="gog.com button image" src={gog.src} />
                </UnstyledButton>
              </Group>
              <Space h="xl" />
            </div>
          </div>

          <Image
            src="https://res.cloudinary.com/starfun-games/image/upload/v1665115444/bug_star.jpg"
            className={classes.image}
            radius="md"
            alt="bug star"
            width="500"
            height="500"
          />
          <Space h="xl" />
          <div className={classes.inner}>
            <div className={classes.contentmobile}>
              <Text className={classes.title}>Bug Star</Text>
              <Text className={classes.p} mt="md">
                "Bug Star" is a game based on bugs, which means you need to find the bugs that I
                intentionally added to the game & you need to use them to complete the levels.
              </Text>
              <Text mt={20} className={classes.gamestatus}>
                Available Now
              </Text>
              <Group>
                <UnstyledButton aria-label="itch.io button" className={classes.button}>
                  <a target="_blank" href="https://harindulk.itch.io/bug-star">
                    <Image
                      alt="itch.io button image"
                      src={itchio.src}
                      className={classes.buttonimage}
                      width="170"
                      height="51"
                    />
                  </a>
                </UnstyledButton>
              </Group>
              <Space h="xl" />
            </div>
          </div>

          <Image
            src="https://res.cloudinary.com/starfun-games/image/upload/v1665115444/ghost_zone.jpg"
            className={classes.image}
            radius="md"
            alt="Ghost Zone"
            width="500"
            height="500"
          />
          <Space h="xl" />
          <div className={classes.inner}>
            <div className={classes.contentmobile}>
              <Text className={classes.title}>Ghost Zone</Text>
              <Text className={classes.p} mt="md">
                Ghost zone is a small 2D game where you need to run fast and pass the incoming
                ghosts.
              </Text>
              <Text mt={20} className={classes.gamestatus}>
                Available Now
              </Text>
              <Group>
                <UnstyledButton aria-label="play store button" className={classes.button}>
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.Harindulk.Ghostzone"
                  >
                    <Image
                      alt="play store button image"
                      src={googleplay.src}
                      className={classes.buttonimage}
                      width="170"
                      height="51"
                    />
                  </a>
                </UnstyledButton>

                <UnstyledButton aria-label="itch.io button" className={classes.button}>
                  <a target="_blank" href="https://harindulk.itch.io/ghost-zone">
                    <Image
                      alt="itch.io button image"
                      src={itchio.src}
                      className={classes.buttonimage}
                      width="170"
                      height="51"
                    />
                  </a>
                </UnstyledButton>
              </Group>
            </div>
          </div>
        </div>
      </Container>
      <div className={classes.margin} />
    </div>
  );
}

export default games;
