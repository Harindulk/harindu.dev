import { Home } from '../components/Home/Home';
import Competitions from '../components/Competitions/Competitions';
import { Expierience } from '../components/expierience/expierience';
import { Space } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Home />
      <Space h={100} />
      <Expierience />
      <Competitions />
    </>
  );
}
