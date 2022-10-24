import { Home } from '../components/Home/Home';
import Demo from '../components/games/games';
import Competitions from '../components/Competitions/Competitions';
import { ArticleCardVertical } from '../components/expierience/expierience';
import { EmailBanner } from '../components/banner/banner';
import { Space } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Home />
      <Space h={100} />
      <ArticleCardVertical />
      <Competitions />

    </>
  );
}
