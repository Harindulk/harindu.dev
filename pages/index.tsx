import { Home } from '../components/heroheader';
import { Expierience } from '../components/expierience';
import { TableSort } from '../components/hackthons';
import { Space,Container } from '@mantine/core';
import { SocialProfileJsonLd } from 'next-seo';


export default function HomePage() {
  return (
    <Container>
    <>
    <SocialProfileJsonLd
      type="Person"
      name="Harindu Fonseka"
      url="https://harindu.dev"
      sameAs={[
        'https://www.facebook.com/harindulk',
        'https://www.instagram.com/harindulk/',
        'https://www.linkedin.com/in/harindu-fonseka/',
        'https://twitter.com/Harindu_Fonseka',
      ]}
    />
      <Home />
      <Space h={100} />
      <Expierience />
      <Space h={100} />
      <TableSort data={[]} />
    </>
    </Container>
  );
}
