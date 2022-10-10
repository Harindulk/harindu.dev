import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import '../src/Fonts/styles.css';
import { HeaderResponsive } from '../components/Header/Header';
import { FooterLinks } from '../components/Footer/FooterLinks';
import navbardata from '../data/navbar.json';
import footerdata from '../data/footer.json';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Harindu Fonseka</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="title" content="Harindu Fonseka ( Harindulk )" />
        <meta
          name="description"
          content="Hi! I make games, I'm 15 years old programmer & Game Dev with over 4 years of experience. Harindu Fonseka, Student, GameDev, Web Designer, Visit harindu.dev"
        />

        <meta
          name="google-site-verification"
          content="RQKIyXih772pTDirvoZsElb7O5YbZ_dHFiykklbPgKg"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{ colorScheme, fontFamily: 'Poppins' }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <HeaderResponsive links={navbardata.props.links} />
            <Component {...pageProps} />
            <FooterLinks data={footerdata.data} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
