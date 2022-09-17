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
      maxWidth: 380,
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
              <Text color="dimmed" mt="md">
                Face the challenges of unique theme maps with many colorful cars. Gain bonuses 🚗.
                from daring tricks and collect coins to get maps and by leveling up you can reach even
                😎. greater distances with a small fuel capacity⛽.
              </Text>
              <Title mt={20} order={3}>
                Coming Soon
              </Title>
              <Group>
                <UnstyledButton className={classes.button}>
                  <Image src={googleplay.src} className={classes.buttonimage} />
                </UnstyledButton>
  
                <UnstyledButton className={classes.button}>
                  <Image src={appstore.src} className={classes.buttonimage} />
                </UnstyledButton>
              </Group>
            </div>
            <Image
              src={microraly.src}
              width="380px"
              height="380px"
              radius="md"
              className={classes.image}
            />
          </div>
  
        </Container>
      </div>
    );
  }
  
  export default about;
  