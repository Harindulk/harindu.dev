import { Table, Container, Title, createStyles } from '@mantine/core';
import attributes from './elements.json';

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },
}));

export function Competitions() {
  const { classes } = useStyles();
  const elements = attributes.competitions;

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.Rank}</td>
    </tr>
  ));

  return (
    <Container>
      <Title mt={100} className={classes.title}>
        Competitions
      </Title>
      <Table mt={30} highlightOnHover fontSize={17}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  );
}

export default Competitions;
