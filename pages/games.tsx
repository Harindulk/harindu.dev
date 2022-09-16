import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  UnstyledButton,
  Avatar,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import finalroom from '../public/images/the-final-room.jpg';
import microraly from '../public/images/micro-rally.jpg';
import googleplay from '../public/images/playstorebutton.png';
import appstore from '../public/images/appstorebutton.png';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing.xl * 3,
  },

  content: {
    maxWidth: 380,
    marginRight: theme.spacing.xl * 3,

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
    fontWeight: 900,

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
    flex: 1,

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

export function games() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> React <br /> components library
            </Title>
            <Text color="dimmed" mt="md">
              Build fully functional accessible web applications faster than ever – Mantine includes
              more than 120 customizable components and hooks to cover you in any situation
            </Text>

            <Group mt={30}>

              <UnstyledButton className={classes.button} >
                <Link href="https://play.google.com/store/apps/details?id=com.HarindulkGames.microrally">
                <Image src={googleplay.src} className={classes.buttonimage} />
                </Link>
              </UnstyledButton>
              
              <UnstyledButton className={classes.button} >
                <Link href="https://play.google.com/store/apps/details?id=com.HarindulkGames.microrally">
                <Image src={appstore.src} className={classes.buttonimage} />
                </Link>
              </UnstyledButton>

            </Group>
          </div>
          <Image src={microraly.src} className={classes.image} />
        </div>

        <div className={classes.inner}>
          <Image src={finalroom.src} className={classes.image} />

          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> React <br /> components library
            </Title>
            <Text color="dimmed" mt="md">
              Build fully functional accessible web applications faster than ever – Mantine includes
              more than 120 customizable components and hooks to cover you in any situation
            </Text>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Source code
              </Button>
            </Group>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default games;
