import { HomeBanner } from '../components/HomeBanner/HomeBanner';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { FooterLinks } from '../components/Footer/FooterLinks';
import Demo from '../components/games/games';
import { HeaderResponsive } from '../components/Header/Header';
import attributes from '../components/Header/attributes.json';

export default function HomePage() {
  return (
    <>
      <HeaderResponsive links={attributes.props.links}/>
      <HomeBanner />
      <Welcome />
      <ColorSchemeToggle />
      <Demo />

      <FooterLinks data={[]} />
    </>
  );
}
