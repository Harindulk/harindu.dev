import { Table, Container, Title, createStyles, Badge, useMantineTheme } from '@mantine/core';
import competitionsdata from '../../data/competitions.json';

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Poppins, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
    
  },

  table: {
    borderStyle: 'solid',
  },

  tableitem:{
    fontSize: 10,
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
  'most innovative idea': 'red',
};

export function Competitions() {
  const { classes } = useStyles();
  const elements = competitionsdata.competitions;
  const theme = useMantineTheme();

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td className={classes.tableitem} >{element.name}</td>
      <td >
        <Badge
          color={jobColors[element.Rank.toLowerCase()]}
          variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
          className={classes.badge}
        >
          {element.Rank}
        </Badge>
      </td>
    </tr>
  ));

  return (
    <Container>
      <Title mt={100} className={classes.title}>
        Competitions
      </Title>
      <Table mt={30} highlightOnHover fontSize={17}>
        <thead >
          <tr>
            <th>Name</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody >{rows}</tbody>
      </Table>
    </Container>
  );
}

export default Competitions;