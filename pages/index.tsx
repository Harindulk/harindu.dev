import { Home } from '../components/Home';
import Competitions from '../components/Competitions';
import { Expierience } from '../components/expierience';
import { TableSort } from '../components/hackthons';
import { Space,Container } from '@mantine/core';


export default function HomePage() {
  return (
    <Container>
    <>
      <Home />
      <Space h={100} />
      <Expierience />
      <Space h={100} />
      <TableSort data={[]} />
    </>
    </Container>
  );
}
