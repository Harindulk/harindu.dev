// Import necessary libraries and components
import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import Script from 'next/script';
import { getCookie, setCookie } from 'cookies-next';

// Import your custom components and styles
import { HeaderResponsive } from '../components/Header';
import { FooterLinks } from '../components/Footer'; // Make sure this path matches your actual file structure
import { RouterTransition } from '../components/Loader'; // Adjust this import if necessary
import favicon from '../public/favicon.png';
import '../public/Fonts/styles.css'; // Verify this path is correct for your styles

// This helper function attempts to get the initial color scheme from cookies
// Note: Since this runs on the client-side, it will only affect color scheme after hydration
function useInitialColorScheme() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  useEffect(() => {
    // Attempt to read the color scheme from cookies
    const savedScheme = getCookie('mantine-color-scheme') as ColorScheme;
    if (savedScheme) {
      setColorScheme(savedScheme);
    }
  }, []);

  return [colorScheme, setColorScheme] as const;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useInitialColorScheme();

  // Function to toggle between light and dark mode
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    // Save the user's preference in cookies
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
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Z6V0MNDZ4N"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z6V0MNDZ4N');
        `}
      </Script>

      {/* Mantine and Notification Providers for theme and notifications */}
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            {/* Your custom components like headers or footers */}
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
