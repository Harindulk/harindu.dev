import { Home } from '../components/Home';
import Competitions from '../components/Competitions';
import { Expierience } from '../components/expierience';
import { Space,Container } from '@mantine/core';

export default function HomePage() {
  return (
    <Container>
    <>
      <Home />
      <Space h={100} />
      <Expierience />
      <Space h={100} />
      <Competitions />
    </>
    </Container>
  );
}
