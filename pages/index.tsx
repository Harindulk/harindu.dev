import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { FooterLinks } from '../components/Footer/FooterLinks';
import { HeroBullets } from '../components/HeroBullets/HeroBullets';
import Demo from '../components/games/games';

export default function HomePage() {
  return (
    <>
      <HeroBullets />

      <Welcome />
      <ColorSchemeToggle />
      <Demo />

      <FooterLinks data={[]} />
    </>
  );
}
