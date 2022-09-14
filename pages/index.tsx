import { HomeBanner } from '../components/HomeBanner/HomeBanner';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { FooterLinks } from '../components/Footer/FooterLinks';
import Demo from '../components/games/games';

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <Welcome />
      <ColorSchemeToggle />
      <Demo />

      <FooterLinks data={[]} />
    </>
  );
}
