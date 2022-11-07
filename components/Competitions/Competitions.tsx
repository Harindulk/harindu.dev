import { Table, Container, Title, createStyles, Badge, useMantineTheme, Stack,Button  } from '@mantine/core';
import competitionsdata from '../../data/competitions.json';

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[8],
    lineHeight: 1,
    fontWeight: 800,
    fontSize: 35,
    marginBottom: theme.spacing.md,

  },

  table: {
    borderStyle: 'solid',
  },

  tableitem:{
    fontSize: 10,
  },

  leftwrapper: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
      }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
    },
  },

  box: {
    margin: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
      }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
    },
  },
  
}));

const jobColors: Record<string, string> = {
  winner: 'red',
  '2nd runners up': 'red',
  '2nd runner up': 'red',
  '4th': 'green',
  '5th': 'green',
  'top 10': 'green',
  finalist: 'yellow',
  'semi-finalist': 'yellow',
  'n/a': 'gray',
  pending: 'gray',
  'best idea': 'red',
};

export function Competitions() {
  const { classes } = useStyles();
  const elements = competitionsdata.competitions;
  const theme = useMantineTheme();

  const rows = elements.map((element) => (
    <body className={classes.box}>
    <tr key={element.name}>
      <td className={classes.tableitem} >{element.name}</td>
      <td >
        <Badge
          color={jobColors[element.Rank.toLowerCase()]}
          variant={theme.colorScheme === 'dark' ? 'light' : 'outline'} >
          {element.Rank}
        </Badge>
      </td>
    </tr>
    </body>
  ));

  return (
    <Container>
      <div>
      <Title mt={100} className={classes.title}>
        Competitions
      </Title>
      <div className={classes.leftwrapper}>
        <thead >
          <tr>
            <th>Name</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody >{rows}</tbody>
      </div>
      </div>

    </Container>
  );
}

export default Competitions;