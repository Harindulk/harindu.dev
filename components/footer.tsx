import { createStyles, Text, Container, Group } from '@mantine/core';
import footerdata from '../data/footer.json';

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },  

  description: {
    marginTop: 5,
    textDecoration: 'none',

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  description2: {
    textDecoration: 'none',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontFamily: `Quicksand Bold, ${theme.fontFamily}`,
    fontSize: 19,
    fontWeight: 700,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  linkfooter: {
    textDecoration: 'none',
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },
  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },

  maintext: {
    fontFamily: `Quicksand Bold, ${theme.fontFamily}`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 28,
    fontWeight: 700,
  },

  //cover image
  cover: {
    marginTop: 120,
    objectFit: 'cover',
    top: 0,
    left: 0,
  },

}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function FooterLinks({ data }: FooterLinksProps) {
  const { classes } = useStyles();
  data = footerdata.data;

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'> key={index} className={classes.link} component="a" href={link.link}>
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <div>

      <footer className={classes.footer}>
        <Container className={classes.inner}>
          <div className={classes.logo}>
            <Text className={classes.maintext}>
              harindu.dev
            </Text>
            <Text size="xs" color="dimmed" className={classes.description}>
              if you want to contact me, please use Linkedin, Email, or Twitter.
            </Text>

          </div>
          <div className={classes.groups}>{groups}</div>
        </Container>
        <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2022 harindu.dev.
        </Text>

        <Group className={classes.social} position="right" noWrap>
        <Text size="xs" color="dimmed" className={classes.description2}>
              images: © 16personalities.com
            </Text>
        </Group>
      </Container>
      </footer>
    </div>
  );
}

export default FooterLinks;
