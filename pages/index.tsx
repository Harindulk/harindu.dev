import { Home } from '../components/Home';
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
      name="your name"
      url="http://www.your-site.com"
      sameAs={[
        'http://www.facebook.com/your-profile',
        'http://instagram.com/yourProfile',
        'http://www.linkedin.com/in/yourprofile',
        'http://plus.google.com/your_profile',
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
