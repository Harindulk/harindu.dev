import {
    createStyles,
    Image,
    Container,
    Title,
    Group,
    Text,
    UnstyledButton,
    Tooltip,
  } from '@mantine/core';
  import Link from 'next/link';
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
  
    buttonicon: {
      width: '50px',
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

      </div>
    );
  }
  
  export default games;
  