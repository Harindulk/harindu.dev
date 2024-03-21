import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import '../public/Fonts/styles.css';
import { HeaderResponsive } from '../components/Header';
import { FooterLinks } from '../components/footer';
import { RouterTransition } from '../components/loader';
import favicon from '../public/favicon.png';

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
        <meta name="title" content="Harindu Fonseka ( Harindulk )" />
        
        <meta
          name="description"
          content="Hi! I make games, I'm 15 years old programmer & Game Dev with over 4 years of experience. Harindu Fonseka, Student, GameDev, Web Designer, Visit harindu.dev"
        />

        <meta name="google-site-verification" content="RQKIyXih772pTDirvoZsElb7O5YbZ_dHFiykklbPgKg"/>
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />

        <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z6V0MNDZ4N"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z6V0MNDZ4N');
          </script>
      </Head>
      

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{ colorScheme, fontFamily: 'Quicksand' }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
          <RouterTransition />
            <HeaderResponsive />
            <Component {...pageProps} />
            <FooterLinks data={[]} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
      
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
