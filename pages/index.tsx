import { HomeBanner } from '../components/HomeBanner/HomeBanner';
import { Welcome } from '../components/Welcome/Welcome';
import Demo from '../components/games/games';
import { EmailBanner } from '../components/email/email';

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <EmailBanner />
    </>
  );
}
