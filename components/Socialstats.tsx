import { createStyles, Text, Container } from '@mantine/core';
import socialstatsdata from '../data/socialstats.json';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][7]
    } 100%)`,
    padding: theme.spacing.xl * 1.5,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  }, 

  title: {
    fontFamily: `Quicksand Bold, ${theme.fontFamily}`,

    color: theme.white,
    fontWeight: 700,
    fontSize: 16,
  },

  count: {
    fontFamily: `Quicksand Bold, ${theme.fontFamily}`,

    color: theme.white,
    fontSize: 33,
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.sm,
    marginTop: 5,
  },

  stat: {
    flex: 1,

    '& + &': {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,

      [theme.fn.smallerThan('sm')]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
}));

interface SocialMedia {
  data: { title: string; stats: string }[];
}

export function SocialStats({ data }: SocialMedia) {
  data= socialstatsdata.data;

  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
    </div>
  ));
  return <Container><div className={classes.root}>{stats}</div></Container>
}

export default SocialMedia;