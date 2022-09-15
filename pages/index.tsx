import { HomeBanner } from '../components/HomeBanner/HomeBanner';
import { Welcome } from '../components/Welcome/Welcome';
import { FooterLinks } from '../components/Footer/FooterLinks';
import Demo from '../components/games/games';


export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <Welcome />
      <Demo />

      <FooterLinks data={[]} />
    </>
  );
}
