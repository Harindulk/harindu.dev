import { HomeBanner } from '../components/HomeBanner/HomeBanner';
import Demo from '../components/games/games';
import { EmailBanner } from '../components/email/email';
import Competitions from '../components/Competitions/Competitions';

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <Demo />
      <EmailBanner />
      <Competitions />
    </>
  );
}
