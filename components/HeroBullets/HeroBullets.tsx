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
  } from '@mantine/core';
  import { IconCheck } from '@tabler/icons';
  import image from './harindu.png';
  
  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: theme.spacing.xl * 8,
      paddingBottom: theme.spacing.xl * 2,
    },
  
    content: {
      maxWidth: 600,
      marginRight: theme.spacing.xl * 3,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Inconsolata, ${theme.fontFamily}`,
      fontSize: 39,
      lineHeight: 1.2,
      fontWeight: 800,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: 32,
      },
    },

    p: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Inconsolata, ${theme.fontFamily}`,
        fontSize: 19,
        lineHeight: 1.2,
    
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
      flex: 1,
      borderRadius: theme.radius.lg,
      
  
      [theme.fn.smallerThan('md')]: {
        display: 'none',
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
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title mt={20} className={classes.title}>
              Hi, I'm Harindu. <br /> I make games and apps.
              </Title>
              <Text mt={30} className={classes.p}>
              I'm a 16 year old game developer studying GCE O/L at Nalanda College Colombo 10.
              </Text>
              <Text mt={20} className={classes.p}>
              In my free time, I make games and code random things.
              </Text>
  
              <Group mt={30}>
                <Button radius="md" size="md" className={classes.control}>
                  Get started
                </Button>
                <Button variant="default" radius="md" size="md" className={classes.control}>
                  Source code
                </Button>
              </Group>
            </div>
            <Image src={image.src} className={classes.image} />
          </div>
        </Container>
      </div>
    );
  }